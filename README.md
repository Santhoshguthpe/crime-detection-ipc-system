# Multilingual Crime Classification Assistant

An educational FastAPI application that classifies a written or spoken incident description and retrieves a matching legal reference. Version 2 adds browser voice input, English/Hindi/Telugu support, a trained machine-learning classifier, a JSON API, responsive UI, tests, and explicit legal-safety messaging.

> **Important:** This project is for learning and legal awareness only. It is not a police reporting system and does not provide legal advice. Most reference records in the current dataset use legacy IPC numbering. India's BNS, BNSS, and BSA came into force on **1 July 2024**, so every legal result must be independently verified.

## What changed in v2

- Voice-to-text button using the browser Speech Recognition API
- Language selector for English (`en-IN`), Hindi (`hi-IN`), and Telugu (`te-IN`)
- Multilingual interface and crime-category labels
- Supervised TF-IDF + logistic-regression classifier trained at startup
- Top predictions with a confidence score and low-confidence rejection
- FastAPI JSON endpoint at `POST /api/analyze`
- Input limits, safe DOM rendering, health endpoint, responsive design, and tests
- No API key and no paid service required

## Architecture

```text
Voice or typed description
          |
          v
Browser speech-to-text + language selection
          |
          v
FastAPI validation -> Multilingual ML classifier
          |                    |
          |                    +-> category + confidence
          v
Structured legal reference lookup
          |
          v
Result + legal disclaimer
```

The model classifies the incident. Structured data remains the source for section numbers, punishment, bail, and cognizable status. A generative model is intentionally not used for legal facts because it can invent or mix legal provisions.

## Project structure

```text
.
├── main.py
├── crime_detector.py
├── ipc_data.json
├── keyword_mapper.json
├── multilingual_examples.json
├── requirements.txt
├── static/
│   ├── app.js
│   └── styles.css
├── templates/
│   └── index.html
└── tests/
    └── test_classifier.py
```

## Installation

Python 3.10 or newer is recommended.

```bash
git clone https://github.com/Santhoshguthpe/crime-detection-ipc-system.git
cd crime-detection-ipc-system

python -m venv venv
```

Windows:

```powershell
venv\Scripts\activate
python -m pip install -r requirements.txt
python -m uvicorn main:app --reload
```

macOS/Linux:

```bash
source venv/bin/activate
python -m pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000). API documentation is available at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

Voice input works best in current Chrome or Edge. Browsers normally permit microphone access on `localhost` or an HTTPS deployment.

## API example

```bash
curl -X POST http://127.0.0.1:8000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"description":"चाकू दिखाकर पैसे लूट लिए","language":"hi"}'
```

## Run tests

```bash
python -m pytest -q
```

## How the model works

1. English examples are loaded from `keyword_mapper.json`.
2. Hindi and Telugu examples and labels are loaded from `multilingual_examples.json`.
3. Word and character n-gram TF-IDF features are created.
4. Logistic regression learns the crime categories.
5. The API returns the best category only when its score passes a minimum threshold.
6. The category key is used to retrieve legal reference data from `ipc_data.json`.

This is a compact baseline suitable for a student project. A production system would need a lawyer-reviewed BNS dataset, a much larger anonymised training corpus, offline speech recognition, model evaluation by language and category, authentication, rate limiting, audit logs, encryption, and a human-review workflow.

## Official legal sources

- [Ministry of Home Affairs — New Criminal Laws](https://www.mha.gov.in/en/commoncontent/new-criminal-laws)
- [India Code — Bharatiya Nyaya Sanhita, 2023](https://www.indiacode.nic.in/bitstream/123456789/20062/1/a202345.pdf)
