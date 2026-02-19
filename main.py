from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from crime_detector import detect_crime
import json
import os

app = FastAPI()

# Base directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Mount static
app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static")

# Templates
templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "templates"))

# Load IPC data safely
ipc_path = os.path.join(BASE_DIR, "ipc_data.json")

with open(ipc_path, "r", encoding="utf-8") as f:
    ipc_data = json.load(f)


@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/analyze", response_class=HTMLResponse)
def analyze(request: Request, description: str = Form(...)):

    crime = detect_crime(description)

    if crime and crime in ipc_data:
        data = ipc_data[crime]

        result = {
            "crime": crime.title(),
            "section": data.get("section", "N/A"),
            "punishment": data.get("punishment", "N/A"),
            "bailable": data.get("bailable", "N/A"),
            "cognizable": data.get("cognizable", "N/A"),
            "description": data.get("description", "No description available."),
            "max_years": data.get("max_years", "N/A"),
        }

        return templates.TemplateResponse(
            "index.html",
            {
                "request": request,
                "result": result,
                "error": None,
            },
        )

    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "result": None,
            "error": "Crime not identified. Please provide a clearer description.",
        },
    )
