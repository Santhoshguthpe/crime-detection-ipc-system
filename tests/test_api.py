from fastapi.testclient import TestClient

from main import app


client = TestClient(app)


def test_home_and_health():
    home = client.get("/")
    assert home.status_code == 200
    assert "NyayaAI" in home.text
    assert "legal-ai-hero.webp" in home.text
    assert client.get("/health").json()["status"] == "ok"


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
