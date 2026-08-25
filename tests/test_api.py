from fastapi.testclient import TestClient

from main import app


client = TestClient(app)


def test_home_and_health():
    home = client.get("/")
    assert home.status_code == 200
    assert "NyayaAI" in home.text
    assert "legal-ai-hero.webp" in home.text
    health = client.get("/health").json()
    assert health["status"] == "ok"
    assert health["version"] == "4.0.0"


def test_multilingual_api_predictions():
    cases = [
        ("Someone held a blade to my neck and forcefully took my wallet", "en", "robbery"),
        ("एक आदमी ने चाकू दिखाकर मेरा बटुआ छीन लिया", "hi", "robbery"),
        ("నా ఫోన్ కు వచ్చిన ఓటీపీ తీసుకుని బ్యాంకు డబ్బు పోయింది", "te", "cyber fraud"),
    ]

    for description, language, expected_crime in cases:
        response = client.post(
            "/api/analyze",
            json={"description": description, "language": language},
        )
        assert response.status_code == 200
        assert response.json()["prediction"]["crime"] == expected_crime


def test_robbery_uses_current_bns_reference_and_legacy_context():
    response = client.post(
        "/api/analyze",
        json={"description": "A person threatened me with a knife and stole my wallet", "language": "en"},
    )

    assert response.status_code == 200
    legal = response.json()["legal_reference"]
    assert legal["section"] == "Section 309(4) BNS"
    assert legal["legacy_section"] == "Section 392 IPC"
    assert legal["effective_from"] == "2024-07-01"
    assert len(legal["consequences"]) >= 3
    assert legal["source_url"].startswith("https://www.mha.gov.in/")


def test_incident_date_selects_legacy_ipc_context():
    response = client.post(
        "/api/analyze",
        json={
            "description": "A person threatened me with a knife and stole my wallet",
            "language": "en",
            "incident_date": "2023-06-01",
        },
    )

    assert response.status_code == 200
    data = response.json()
    legal = data["legal_reference"]
    assert legal["section"] == "Section 392 IPC"
    assert legal["current_section"] == "Section 309(4) BNS"
    assert legal["legal_regime"] == "IPC"


def test_response_contains_explainability_privacy_and_guidance():
    response = client.post(
        "/api/analyze",
        json={
            "description": "Threatened me with a weapon and took my phone",
            "language": "en",
            "immediate_danger": True,
        },
    )

    assert response.status_code == 200
    data = response.json()
    assert data["analysis_id"].startswith("NYA-")
    assert data["prediction"]["match_strength"] in {"strong", "moderate", "preliminary"}
    assert "weapon" in data["prediction"]["signals"]
    assert data["guidance"]["group"] == "property"
    assert len(data["guidance"]["next_steps"]) == 3
    assert "does not save" in data["privacy"]
    assert data["immediate_danger"] is True


def test_future_incident_date_is_rejected():
    response = client.post(
        "/api/analyze",
        json={
            "description": "my phone was stolen",
            "language": "en",
            "incident_date": "2999-01-01",
        },
    )
    assert response.status_code == 422


def test_special_law_reference_is_not_relabelled_as_bns():
    response = client.post(
        "/api/analyze",
        json={"description": "Someone used my OTP online and stole money from my bank", "language": "en"},
    )

    assert response.status_code == 200
    legal = response.json()["legal_reference"]
    assert legal["section"] == "Section 66D IT Act"
    assert legal["law"] == "Information Technology Act, 2000"
    assert legal["legacy_section"] is None
    assert len(legal["consequences"]) >= 3


def test_rejects_unsupported_language():
    response = client.post(
        "/api/analyze",
        json={"description": "my phone was stolen", "language": "fr"},
    )
    assert response.status_code == 422
