import json
import spacy
import os

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

# Get absolute path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
keyword_path = os.path.join(BASE_DIR, "keyword_mapper.json")

with open(keyword_path, "r", encoding="utf-8") as f:
    keyword_map = json.load(f)


def detect_crime(text):
    text = text.lower()
    doc = nlp(text)

    # Lemmatized tokens (for better NLP detection)
    tokens = [token.lemma_ for token in doc if not token.is_stop]

    best_match = None
    highest_score = 0

    for crime, keywords in keyword_map.items():
        score = 0

        for keyword in keywords:
            keyword = keyword.lower()

            # Phrase match (full sentence match)
            if keyword in text:
                score += 2  # phrase gets higher weight

            # Single word lemma match
            if keyword in tokens:
                score += 1

        if score > highest_score:
            highest_score = score
            best_match = crime

    if best_match:
        return best_match

    return None
