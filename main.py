from __future__ import annotations

import json
import os
from datetime import date, datetime, timezone
from typing import Any
from uuid import uuid4

from fastapi import FastAPI, Form, HTTPException, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel, Field

from crime_detector import SUPPORTED_LANGUAGES, classifier


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MIN_CONFIDENCE = 0.06
BNS_COMMENCEMENT = date(2024, 7, 1)
IPC_SOURCE_URL = "https://www.indiacode.nic.in/bitstream/123456789/15289/1/ipc_act.pdf"

app = FastAPI(
    title="Multilingual Crime Classification Assistant",
    version="4.0.0",
    description="Privacy-first multilingual incident classification and legal-awareness API.",
)
app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static")
templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "templates"))

with open(os.path.join(BASE_DIR, "ipc_data.json"), "r", encoding="utf-8") as file:
    legal_reference = json.load(file)

with open(os.path.join(BASE_DIR, "bns_updates.json"), "r", encoding="utf-8") as file:
    bns_config = json.load(file)

with open(os.path.join(BASE_DIR, "guidance_data.json"), "r", encoding="utf-8") as file:
    guidance_config = json.load(file)

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


def build_legal_reference(
    crime: str, incident_date: date | None = None
) -> dict[str, Any]:
    """Combine the original category record with lawyer-verifiable current-law data."""
    original = legal_reference.get(crime)
    if not original:
        raise HTTPException(status_code=500, detail="Legal reference is missing for this category.")

    update = bns_updates.get(crime)
    uses_legacy_ipc = bool(update and incident_date and incident_date < BNS_COMMENCEMENT)

    if uses_legacy_ipc:
        reference = dict(original)
        reference.update(
            {
                "law": "Indian Penal Code, 1860",
                "legacy_section": None,
                "current_section": update["section"],
                "current_law": update["law"],
                "effective_from": None,
                "source_title": "India Code — Indian Penal Code, 1860",
                "source_url": IPC_SOURCE_URL,
                "law_notice": (
                    "The supplied incident date is before 1 July 2024, so the legacy IPC reference "
                    "is shown. The final applicable provision depends on the savings clause and facts."
                ),
                "legal_regime": "IPC",
                "consequences": [
                    f"The stored IPC statutory range is: {original['punishment']}.",
                    f"The current BNS equivalent in this dataset is {update['section']}.",
                    "The exact charge and outcome depend on evidence, circumstances and legal review.",
                ],
            }
        )
    elif update:
        reference = dict(original)
        reference.update(update)
        reference.update(
            {
                "effective_from": bns_meta["effective_from"],
                "source_title": bns_meta["source_title"],
                "source_url": bns_meta["source_url"],
                "law_notice": bns_meta["notice"],
                "bailable": "Verify under the applicable BNSS schedule",
                "cognizable": "Verify under the applicable BNSS schedule",
                "current_section": None,
                "current_law": None,
                "legal_regime": "BNS" if incident_date else "BNS_CURRENT_REFERENCE",
            }
        )
    else:
        reference = dict(original)
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
        reference.setdefault("current_section", None)
        reference.setdefault("current_law", None)
        reference["legal_regime"] = "SPECIAL_LAW"

    reference["classification_note"] = (
        "Bail and cognizable status are indicative. The exact classification can depend on the "
        "subsection, facts, amendments and procedural law."
    )
    return reference


def build_guidance(crime: str, language: str) -> dict[str, Any]:
    selected_group = guidance_config["groups"]["general"]
    selected_group_name = "general"
    for group_name, group in guidance_config["groups"].items():
        if crime in group.get("categories", []):
            selected_group = group
            selected_group_name = group_name
            break

    resource_names = ["emergency", "legal_aid"]
    if selected_group_name == "cyber":
        resource_names.insert(1, "cyber")

    resources = []
    for resource_name in resource_names:
        resource = guidance_config["resources"][resource_name]
        resources.append(
            {
                "id": resource_name,
                "label": resource["label"].get(language, resource["label"]["en"]),
                "url": resource["url"],
            }
        )

    return {
        "group": selected_group_name,
        "next_steps": selected_group["next_steps"].get(
            language, selected_group["next_steps"]["en"]
        ),
        "evidence": selected_group["evidence"].get(
            language, selected_group["evidence"]["en"]
        ),
        "resources": resources,
    }


def confidence_band(confidence: float) -> str:
    if confidence >= 0.55:
        return "strong"
    if confidence >= 0.20:
        return "moderate"
    return "preliminary"


class AnalysisRequest(BaseModel):
    description: str = Field(min_length=3, max_length=2000)
    language: str = Field(default="en", pattern="^(en|hi|te)$")
    incident_date: date | None = None
    immediate_danger: bool = False


def analyze_description(
    description: str,
    language: str,
    incident_date: date | None = None,
    immediate_danger: bool = False,
) -> dict[str, Any]:
    if language not in SUPPORTED_LANGUAGES:
        raise HTTPException(status_code=422, detail="Unsupported language.")

    clean_description = description.strip()
    if len(clean_description) < 3:
        raise HTTPException(status_code=422, detail="Please provide a clearer description.")
    if len(clean_description) > 2000:
        raise HTTPException(status_code=422, detail="Description must be under 2000 characters.")
    if incident_date and incident_date > date.today():
        raise HTTPException(status_code=422, detail="Incident date cannot be in the future.")

    predictions = classifier.predict(clean_description, language=language, top_k=3)
    if not predictions or predictions[0].confidence < MIN_CONFIDENCE:
        return {
            "matched": False,
            "message": "The model is not confident enough. Add details about what happened.",
            "alternatives": [prediction.to_dict() for prediction in predictions],
        }

    best = predictions[0]
    reference = build_legal_reference(best.crime, incident_date)
    guidance = build_guidance(best.crime, language)

    return {
        "matched": True,
        "analysis_id": f"NYA-{uuid4().hex[:10].upper()}",
        "analyzed_at": datetime.now(timezone.utc).isoformat(),
        "language": language,
        "incident_date": incident_date.isoformat() if incident_date else None,
        "immediate_danger": immediate_danger,
        "prediction": {
            **best.to_dict(),
            "match_strength": confidence_band(best.confidence),
            "signals": classifier.matched_signals(clean_description, best.crime),
        },
        "alternatives": [prediction.to_dict() for prediction in predictions[1:]],
        "legal_reference": reference,
        "guidance": guidance,
        "privacy": "The server analyses this request in memory and this application does not save the incident text.",
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
    return {
        "status": "ok",
        "version": app.version,
        "model": "multilingual-tfidf-logistic-regression",
    }


@app.post("/api/analyze")
def analyze_api(payload: AnalysisRequest) -> dict[str, Any]:
    return analyze_description(
        payload.description,
        payload.language,
        payload.incident_date,
        payload.immediate_danger,
    )


@app.post("/analyze", response_class=HTMLResponse)
def analyze_form(
    request: Request,
    description: str = Form(...),
    language: str = Form("en"),
    incident_date: date | None = Form(None),
    immediate_danger: bool = Form(False),
):
    result = analyze_description(description, language, incident_date, immediate_danger)
    return templates.TemplateResponse(
        request=request,
        name="index.html",
        context={
            "server_result": result,
            "submitted_description": description,
            "submitted_language": language,
            "submitted_incident_date": incident_date.isoformat() if incident_date else "",
            "submitted_immediate_danger": immediate_danger,
        },
    )
