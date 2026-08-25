from __future__ import annotations

import json
import math
import os
import re
import unicodedata
from collections import Counter
from dataclasses import asdict, dataclass
from typing import Any

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import FeatureUnion, Pipeline


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SUPPORTED_LANGUAGES = {"en", "hi", "te"}
EXPLANATION_STOPWORDS = {
    "a", "an", "and", "are", "at", "by", "for", "from", "he", "her", "him",
    "his", "i", "in", "is", "it", "me", "my", "of", "on", "or", "she", "someone",
    "that", "the", "their", "they", "this", "to", "was", "were", "with", "एक", "और",
    "का", "की", "को", "से", "ने", "मेरा", "मेरी", "था", "है", "एकరు", "నా", "ఒక",
    "కు", "తో", "లో", "నన్ను", "అతను", "వారు",
}


@dataclass(frozen=True)
class Prediction:
    crime: str
    confidence: float
    label: str

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


def _normalize(text: str) -> str:
    text = text.casefold().strip()
    text = re.sub(r"\s+", " ", text)
    return text


def _tokens(text: str) -> list[str]:
    tokens = []
    for raw_token in text.split():
        token = "".join(
            character
            for character in raw_token
            if unicodedata.category(character)[0] in {"L", "M", "N"}
        )
        if len(token) >= 2 and token not in EXPLANATION_STOPWORDS:
            tokens.append(token)
    return tokens


class CrimeClassifier:
    """Small supervised multilingual classifier trained from project examples."""

    def __init__(
        self,
        keyword_path: str | None = None,
        multilingual_path: str | None = None,
    ) -> None:
        self.keyword_path = keyword_path or os.path.join(BASE_DIR, "keyword_mapper.json")
        self.multilingual_path = multilingual_path or os.path.join(
            BASE_DIR, "multilingual_examples.json"
        )
        self.labels: dict[str, dict[str, str]] = {}
        self._category_terms: dict[str, Counter[str]] = {}
        self._term_categories: dict[str, set[str]] = {}
        texts, targets = self._load_training_data()

        self.model = Pipeline(
            [
                (
                    "features",
                    FeatureUnion(
                        [
                            (
                                "words",
                                TfidfVectorizer(
                                    analyzer="word",
                                    ngram_range=(1, 2),
                                    sublinear_tf=True,
                                ),
                            ),
                            (
                                "characters",
                                TfidfVectorizer(
                                    analyzer="char_wb",
                                    ngram_range=(2, 5),
                                    sublinear_tf=True,
                                ),
                            ),
                        ]
                    ),
                ),
                (
                    "classifier",
                    LogisticRegression(
                        C=6.0,
                        max_iter=2500,
                        class_weight="balanced",
                        random_state=42,
                    ),
                ),
            ]
        )
        self.model.fit(texts, targets)

    def _load_training_data(self) -> tuple[list[str], list[str]]:
        with open(self.keyword_path, "r", encoding="utf-8") as file:
            english_examples = json.load(file)
        with open(self.multilingual_path, "r", encoding="utf-8") as file:
            multilingual = json.load(file)

        texts: list[str] = []
        targets: list[str] = []

        for crime, examples in english_examples.items():
            for example in examples:
                self._add_example(texts, targets, example, crime)

        for crime, config in multilingual.items():
            self.labels[crime] = config.get("labels", {})
            for example_group in config.get("examples", {}).values():
                for example in example_group:
                    self._add_example(texts, targets, example, crime)

        if len(set(targets)) < 2:
            raise RuntimeError("At least two crime categories are required to train the model.")
        return texts, targets

    def _add_example(
        self, texts: list[str], targets: list[str], example: str, crime: str
    ) -> None:
        normalized = _normalize(example)
        if not normalized:
            return
        texts.append(normalized)
        targets.append(crime)
        terms = self._category_terms.setdefault(crime, Counter())
        example_terms = _tokens(normalized)
        terms.update(example_terms)
        for token in example_terms:
            self._term_categories.setdefault(token, set()).add(crime)

    def localized_label(self, crime: str, language: str = "en") -> str:
        language = language if language in SUPPORTED_LANGUAGES else "en"
        return self.labels.get(crime, {}).get(language, crime.replace("_", " ").title())

    def predict(
        self, text: str, language: str = "en", top_k: int = 3
    ) -> list[Prediction]:
        normalized = _normalize(text)
        if not normalized:
            return []

        probabilities = self.model.predict_proba([normalized])[0]
        classes = self.model.classes_
        ranked = sorted(
            zip(classes, probabilities), key=lambda item: item[1], reverse=True
        )[: max(1, min(top_k, len(classes)))]

        return [
            Prediction(
                crime=crime,
                confidence=round(float(probability), 4),
                label=self.localized_label(crime, language),
            )
            for raw_crime, probability in ranked
            for crime in [str(raw_crime)]
            if math.isfinite(float(probability))
        ]

    def matched_signals(self, text: str, crime: str, limit: int = 6) -> list[str]:
        """Return human-readable words shared with examples for the predicted category."""
        normalized = _normalize(text)
        terms = self._category_terms.get(crime, Counter())
        input_terms = list(dict.fromkeys(_tokens(normalized)))
        matches = [
            token
            for token in input_terms
            if token in terms and len(self._term_categories.get(token, set())) <= 3
        ]
        matches.sort(
            key=lambda token: (
                len(self._term_categories.get(token, set())),
                -terms[token],
                input_terms.index(token),
            )
        )
        return matches[:limit]


classifier = CrimeClassifier()


def detect_crime(text: str, language: str = "en") -> str | None:
    """Backward-compatible helper used by older integrations."""
    predictions = classifier.predict(text, language=language, top_k=1)
    return predictions[0].crime if predictions else None
