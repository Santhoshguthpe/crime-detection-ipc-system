from __future__ import annotations

import json
import os
from typing import Any

from fastapi import FastAPI, Form, HTTPException, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel, Field

from crime_detector import SUPPORTED_LANGUAGES, classifier


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MIN_CONFIDENCE = 0.06

app = FastAPI(
    title="Multilingual Crime Classification Assistant",
    version="3.0.1",
    description="Educational multilingual crime-category prediction API.",
)
app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static")
templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "templates"))

with open(os.path.join(BASE_DIR, "ipc_data.json"), "r", encoding="utf-8") as file:
    legal_reference = json.load(file)

with open(os.path.join(BASE_DIR, "bns_updates.json"), "r", encoding="utf-8") as file:
    bns_config = json.load(file)

bns_meta = bns_config["meta"]
bns_updates = bns_config["updates"]

SPECIAL_LAWS = {
    "domestic violence": "Protection of Women from Domestic Violence Act, 2005",
    "corruption": "Prevention of Corruption Act, 1988",
    "hacking": "Information Technology Act, 2000",
    "cyber fraud": "Information Technology Act, 2000",
    "identity theft": "Information Technology Act, 2000",
    "drug trafficking": "Narcotic Drugs and Psychotropic Substances Act, 1985",
}


def build_legal_reference(crime: str) -> dict[str, Any]:
    """Combine the original category record with lawyer-verifiable current-law data."""
    original = legal_reference.get(crime)
    if not original:
        raise HTTPException(status_code=500, detail="Legal reference is missing for this category.")

    reference = dict(original)
    update = bns_updates.get(crime)
    if update:
        reference.update(update)
        reference.update(
            {
                "effective_from": bns_meta["effective_from"],
                "source_title": bns_meta["source_title"],
                "source_url": bns_meta["source_url"],
                "law_notice": bns_meta["notice"],
                "bailable": "Verify under the applicable BNSS schedule",
                "cognizable": "Verify under the applicable BNSS schedule",
            }
        )
    else:
        reference.setdefault("law", SPECIAL_LAWS.get(crime, "Applicable special law"))
        reference.setdefault("legacy_section", None)
        reference.setdefault(
            "consequences",
            [
                f"The stated statutory range is: {reference['punishment']}.",
                "The exact charge and sentence depend on the facts, evidence and applicable amendments.",
                "Connected offences or aggravated circumstances may change the legal outcome.",
            ],
        )
        reference.setdefault("source_title", None)
        reference.setdefault("source_url", None)
        reference.setdefault(
            "law_notice",
            "This category is governed by a special law or a provision not replaced by the BNS overlay.",
        )

    reference["classification_note"] = (
        "Bail and cognizable status are indicative. The exact classification can depend on the "
        "subsection, facts, amendments and procedural law."
    )
    return reference


class AnalysisRequest(BaseModel):
    description: str = Field(min_length=3, max_length=2000)
    language: str = Field(default="en", pattern="^(en|hi|te)$")


def analyze_description(description: str, language: str) -> dict[str, Any]:
    if language not in SUPPORTED_LANGUAGES:
        raise HTTPException(status_code=422, detail="Unsupported language.")

    clean_description = description.strip()
    if len(clean_description) < 3:
        raise HTTPException(status_code=422, detail="Please provide a clearer description.")
    if len(clean_description) > 2000:
        raise HTTPException(status_code=422, detail="Description must be under 2000 characters.")

    predictions = classifier.predict(clean_description, language=language, top_k=3)
    if not predictions or predictions[0].confidence < MIN_CONFIDENCE:
        return {
            "matched": False,
            "message": "The model is not confident enough. Add details about what happened.",
            "alternatives": [prediction.to_dict() for prediction in predictions],
        }

    best = predictions[0]
    reference = build_legal_reference(best.crime)

    return {
        "matched": True,
        "language": language,
        "prediction": best.to_dict(),
        "alternatives": [prediction.to_dict() for prediction in predictions[1:]],
        "legal_reference": reference,
        "disclaimer": (
            "Educational prediction only, not legal advice or a sentencing decision. Current BNS "
            "references are shown for incidents on or after 1 July 2024, subject to the savings "
            "clause; older incidents may continue under IPC. Verify every result with a qualified "
            "Indian legal professional."
        ),
    }


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context={},
    )


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "model": "multilingual-tfidf-logistic-regression"}


@app.post("/api/analyze")
def analyze_api(payload: AnalysisRequest) -> dict[str, Any]:
    return analyze_description(payload.description, payload.language)


@app.post("/analyze", response_class=HTMLResponse)
def analyze_form(
    request: Request,
    description: str = Form(...),
    language: str = Form("en"),
):
    result = analyze_description(description, language)
    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context={
            "server_result": result,
            "submitted_description": description,
            "submitted_language": language,
        },
    )
