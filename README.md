# NyayaAI — Multilingual Incident & Legal Awareness Assistant

A privacy-first FastAPI application that classifies a written or spoken incident description and retrieves a structured Indian legal-awareness reference. Version 4 adds date-aware BNS/IPC handling, explainable category signals, alternative results, multilingual next steps, evidence guidance, official help resources, printable reports, and a professional responsive interface.

> **Important:** This project is for learning and legal awareness only. It is not a police reporting system and does not provide legal advice. BNS references are shown for covered categories, while legacy IPC context remains available for older incidents. India's BNS, BNSS, and BSA came into force on **1 July 2024**; applicability depends on the incident date, the savings clause, facts, and procedural law, so every result must be independently verified.

## Professional v4 capabilities

- Voice-to-text using the browser Speech Recognition API, with final-result filtering, per-session deduplication, and double-start protection
- Language selector for English (`en-IN`), Hindi (`hi-IN`), and Telugu (`te-IN`)
- Multilingual interface and crime-category labels
- Supervised TF-IDF + logistic-regression classifier trained at startup
- Human-readable match strength, supporting text signals, alternative categories, and low-confidence rejection
- Current BNS section and punishment overlays for 23 covered categories, plus legacy IPC context
- Incident-date handling that shows legacy IPC context for dates before 1 July 2024
- Structured possible consequences and links to the official Ministry of Home Affairs BNS text
- Localised next steps and evidence-preservation guidance for violent, women-safety, cyber, property, and general matters
- Official ERSS 112, Cybercrime 1930, and NALSA 15100 resources
- No account, incident database, or history page; incident text is processed in memory for the current response
- Copy summary and browser print/save-to-PDF actions
- Premium legal-tech design, quick examples, accessibility states, and a generated hero illustration
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
 (incident date + BNS/IPC overlay + special laws)
          |
          v
Explainability + law context + practical guidance
```

The model classifies the incident. Structured data remains the source for section numbers, punishment, bail, and cognizable status. A generative model is intentionally not used for legal facts because it can invent or mix legal provisions.

## Project structure

```text
.
├── main.py
├── crime_detector.py
├── bns_updates.json
├── guidance_data.json
├── ipc_data.json
├── keyword_mapper.json
├── multilingual_examples.json
├── requirements.txt
├── static/
│   ├── images/
│   │   └── legal-ai-hero.webp
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
  -d '{"description":"चाकू दिखाकर पैसे लूट लिए","language":"hi","incident_date":"2025-01-15","immediate_danger":false}'
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
5. The API returns the best category only when its score passes a minimum threshold and converts the score into a clear match-strength label.
6. The category key retrieves a base record from `ipc_data.json`.
7. The incident date chooses current BNS or legacy IPC context for covered categories; special-law categories remain under their applicable statute.
8. `guidance_data.json` adds language-specific next steps, evidence prompts, and official help resources.

The model never generates punishment text. It only predicts a category; sections, statutory ranges, and consequence notes come from structured records. This avoids treating generative output as a legal source.

This is a compact baseline suitable for a student project. A production system would still need a lawyer-reviewed and versioned legal dataset, a much larger anonymised training corpus, offline speech recognition, model evaluation by language and category, authentication, rate limiting, audit logs, encryption, and a human-review workflow.

The hero artwork was produced with OpenAI image generation for this project.

## Official legal sources

- [Ministry of Home Affairs — New Criminal Laws](https://www.mha.gov.in/en/commoncontent/new-criminal-laws)
- [India Code — Bharatiya Nyaya Sanhita, 2023](https://www.indiacode.nic.in/bitstream/123456789/20062/1/a202345.pdf)
