# Charanvandan CSR Demo

A full-stack demo of the [Charanvandan CSR page](https://charanvandan.com/csr/) built with **React** (Vite) and **Python** (FastAPI).

## Features

- Responsive layout (mobile + desktop)
- Hero, About/Mission, CSR Initiatives, Impact/Testimonials, Contact form
- Sticky navigation with smooth scroll
- Contact form API with validation (inquiries saved to `backend/data/inquiries.txt`)

## Project Structure

```
charanvandan/
├── backend/          # FastAPI API
│   ├── main.py
│   └── requirements.txt
└── frontend/         # React + Vite
    └── src/
```

## Prerequisites

- Python 3.10+
- Node.js 18+

## Quick Start

### 1. Backend (terminal 1)

```bash
cd backend
python -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # macOS/Linux
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

API docs: http://127.0.0.1:8000/docs

### 2. Frontend (terminal 2)

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173 — the Vite dev server proxies `/api` to the backend.

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/initiatives` | CSR program list |
| GET | `/api/impact` | Stats + testimonials |
| POST | `/api/contact` | Submit partnership inquiry |

## Production Build

```bash
cd frontend && npm run build
```

Serve `frontend/dist` with any static host; set `VITE_API_URL` to your API base URL if not using a reverse proxy.
