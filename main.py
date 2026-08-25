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
    version="2.0.0",
    description="Educational multilingual crime-category prediction API.",
)
app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static")
templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "templates"))

with open(os.path.join(BASE_DIR, "ipc_data.json"), "r", encoding="utf-8") as file:
    legal_reference = json.load(file)


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
    reference = legal_reference.get(best.crime)
    if not reference:
        raise HTTPException(status_code=500, detail="Legal reference is missing for this category.")

    return {
        "matched": True,
        "language": language,
        "prediction": best.to_dict(),
        "alternatives": [prediction.to_dict() for prediction in predictions[1:]],
        "legal_reference": reference,
        "disclaimer": (
            "Educational prediction only, not legal advice. The stored dataset contains legacy IPC "
            "and special-law references. For incidents on or after 1 July 2024, verify the "
            "applicable BNS/BNSS provisions with an authorised legal professional."
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
