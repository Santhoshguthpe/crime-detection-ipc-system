from fastapi.testclient import TestClient

from main import app


client = TestClient(app)


def test_home_and_health():
    assert client.get("/").status_code == 200
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


def test_rejects_unsupported_language():
    response = client.post(
        "/api/analyze",
        json={"description": "my phone was stolen", "language": "fr"},
    )
    assert response.status_code == 422
