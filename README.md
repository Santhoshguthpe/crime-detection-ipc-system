# 📌 Crime Detection & IPC Section Prediction System

## 📖 Overview

The **Crime Detection & IPC Section Prediction System** is a Natural Language Processing (NLP) based legal-tech application that analyzes crime descriptions written in natural language and predicts the relevant Indian Penal Code (IPC) sections along with punishment details.

This system bridges the gap between common language descriptions and formal legal classification.

---

## 🎯 Objectives

- Automate crime classification based on text input  
- Provide IPC section details  
- Display punishment, bailable status, and cognizable status  
- Improve legal awareness  

---

## 💻 Tech Stack

- Python  
- FastAPI  
- spaCy (NLP)  
- Uvicorn  
- HTML  
- Jinja2  
- JSON  

---

## 🏗 Project Architecture

The system follows a **layered architecture**:

- **Presentation Layer** – HTML + Jinja2  
- **Application Logic Layer** – FastAPI + NLP engine  
- **Data Layer** – JSON files (IPC data + keyword mapping)  

---

## 🔄 Working Flow

1. User enters crime description  
2. FastAPI receives input  
3. spaCy processes text  
4. Keywords matched with JSON  
5. Crime detected  
6. IPC details retrieved  
7. Result displayed  

---

## 📂 Project Structure

crime_predictor/
│
├── main.py
├── crime_detector.py
├── ipc_data.json
├── keyword_mapper.json
├── templates/
│ └── index.html
├── static/
│ └── styles.css
└── README.md


---

## ⚙ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/crime-detection-ipc-system.git
2️⃣ Install Dependencies
pip install fastapi uvicorn spacy jinja2
python -m spacy download en_core_web_sm
3️⃣ Run the Application
uvicorn main:app --reload
4️⃣ Open in Browser
http://127.0.0.1:8000
✅ Features
NLP-based text processing

Automatic IPC section prediction

Displays punishment details

Modular and scalable design

Easy to update legal database

⚠ Limitations
Keyword-based detection

English language support only

Single crime prediction

🚀 Future Enhancements
Machine Learning integration

Multi-language support

Database integration

Cloud deployment

Multi-crime classification

📌 Disclaimer
This project is developed for educational and analytical purposes only. It does not replace professional legal advice.

