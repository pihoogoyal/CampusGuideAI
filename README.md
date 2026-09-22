<h1 align="center">🎓 CampusGuide AI</h1>

<p align="center">
  An AI-powered Retrieval-Augmented Generation (RAG) based Knowledge Assistant
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.14-blue?logo=python" />
  &nbsp;
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react" />
  &nbsp;
  <img src="https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi" />
  &nbsp;
  <img src="https://img.shields.io/badge/VectorDB-FAISS-orange" />
  &nbsp;
  <img src="https://img.shields.io/badge/LLM-OpenAI-green" />
</p>


---

## 📖 Overview

CampusGuide AI is a RAG-based document question-answering system built using **React**, **FastAPI**, **FAISS**, **HuggingFace Embeddings**, and **OpenAI GPT**.

The system allows users to:

- 📄 Upload PDF documents
- ✂️ Process and chunk documents automatically
- 🧠 Generate semantic embeddings
- 🗂️ Store embeddings in a FAISS Vector Database
- 💬 Ask questions in natural language
- 🤖 Receive AI-generated contextual responses

---

# ✨ Features

- PDF Upload & Processing
- Automatic Document Chunking
- HuggingFace Embeddings
- FAISS Vector Database
- Semantic Search
- RAG Pipeline
- AI-powered Question Answering
- React Dashboard
- FastAPI Backend
- Swagger API Documentation
- Document Statistics
- Processed Documents List

---

# 🏗️ Tech Stack

## Frontend

- React
- Vite
- Axios
- Lucide React

## Backend

- FastAPI
- Python

## AI / ML

- LangChain
- OpenAI GPT
- HuggingFace Embeddings
- FAISS

## Document Processing

- Unstructured
- PyPDF
- PyMuPDF

---

# 📂 Project Structure

```text
CampusAI/
│
├── backend/
│   ├── app/
│   │
│   ├── llm/
│   │   ├── generate_answer.py
│   │   ├── model.py
│   │   └── prompt.py
│   │
│   ├── rag/
│   │   ├── partition.py
│   │   ├── chunking.py
│   │   ├── vector_store.py
│   │   └── langchain.py
│   │
│   ├── routes/
│   │   ├── upload.py
│   │   └── ask.py
│   │
│   ├── document.py
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   └── styles/
│
└── README.md
```

---

# 🔄 Workflow

```text
User
   │
   ▼
React Frontend
   │
Upload PDF / Ask Question
   │
   ▼
FastAPI Backend
   │
   ├── Upload Route
   ├── Ask Route
   └── Document Route
   │
   ▼
Partition PDF
   │
Chunk Document
   │
Generate Embeddings
   │
Store in FAISS
   │
Retrieve Top-K Chunks
   │
OpenAI GPT
   │
Answer
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <repository-url>

cd CampusAI
```

---

# Backend Setup

```bash
cd backend

python3 -m venv venv

source venv/bin/activate
```

For Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run Backend

```bash
uvicorn app.main:app --reload
```

Backend

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

Open another terminal

```bash
cd frontend

npm install

npm run dev
```

Frontend

```
http://localhost:5173
```

---

# 📄 API Endpoints

## Upload PDF

```http
POST /upload/pdf
```

Uploads and indexes a PDF document.

---

## Get Documents

```http
GET /upload/documents
```

Returns all indexed documents.

---

## Ask Question

```http
POST /ask/
```

Example

```json
{
    "pdf_name":"NumPy Arithmetic Array Operations",
    "question":"What is NumPy?"
}
```

---

# 📸 Screenshots

## Upload Page

(Add Screenshot)

---

## Documents Dashboard

(Add Screenshot)

---

## AI Workspace

(Add Screenshot)

---

## Chat Interface

(Add Screenshot)

---

# ▶️ Quick Start

If you already have the project, simply run:

### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

### Frontend

Open a new terminal.

```bash
cd frontend
npm install
npm run dev
```

---

# 📌 Future Improvements

- Multi-document querying
- OCR support for scanned PDFs
- User Authentication
- Conversation History
- Cloud Deployment
- Hybrid Search
- Role-based Access Control

---

# 👥 Team

- Backend & API Integration
- Frontend Development
- RAG Pipeline
- LLM Integration

---

# 📜 License

This project is developed for educational and research purposes.
