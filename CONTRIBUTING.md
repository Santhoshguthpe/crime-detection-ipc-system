# Contributing to NyayaAI

Thank you for helping improve NyayaAI. Contributions should keep the project understandable, privacy-conscious and honest about its legal and machine-learning limits.

## Before you begin

- Search existing issues before opening a new one.
- Use fictional or fully anonymised incident descriptions only.
- Never commit names, phone numbers, addresses, credentials or other private data.
- Discuss large features in an issue before implementing them.
- Read [SECURITY.md](SECURITY.md) before reporting a vulnerability.

## Local setup

```bash
git clone https://github.com/Santhoshguthpe/crime-detection-ipc-system.git
cd crime-detection-ipc-system
git switch feature/multilingual-ai-voice-v2
python3 -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

On Windows, activate the environment with `venv\Scripts\activate`.

## Development workflow

1. Create a focused branch from the latest project branch.
2. Make one logical change at a time.
3. Add or update tests for changed behaviour.
4. Run all checks locally.
5. Open a pull request using the repository template.

Suggested branch names include `feature/accessibility-improvements`, `fix/telugu-voice-input` and `docs/model-evaluation`.

## Required checks

```bash
python -m json.tool bns_updates.json > /dev/null
python -m json.tool guidance_data.json > /dev/null
python -m compileall -q main.py crime_detector.py
python -m pytest -q
node --check static/app.js
```

## Code and content standards

- Keep functions small and names clear.
- Validate all external input at the API boundary.
- Escape or safely render user-controlled content.
- Maintain keyboard access and useful labels in the interface.
- Keep English, Hindi and Telugu interface messages aligned.
- Do not add a database, tracker or external AI service without documenting its privacy effect.
- Do not claim that automated tests prove model accuracy.

## Legal-data changes

Legal content needs stricter review than normal application text.

- Cite an official source such as India Code or the Ministry of Home Affairs.
- Record the exact law, section, commencement context and source URL.
- Do not guess a section, punishment or consequence.
- Keep classification output separate from maintained legal records.
- Add a regression test for every corrected category-to-law mapping.
- Request review from a person qualified in Indian law before presenting the change as verified.

## Machine-learning changes

- Use anonymised or synthetic training examples.
- Document the dataset source, language balance and limitations.
- Evaluate on a separate test set that was not used for training.
- Report precision, recall and F1-score per category and language when claiming improvement.
- Preserve the low-confidence path and explainability output.

## Pull requests

A useful pull request explains the problem, the solution, testing performed, screenshots for interface changes, privacy effects and any legal sources used. Keep unrelated formatting changes out of the same pull request.
