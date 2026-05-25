from datetime import datetime
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(
    title="Charanvandan CSR API",
    description="Backend for CSR partnership demo",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_DIR = Path(__file__).parent / "data"
DATA_DIR.mkdir(exist_ok=True)
INQUIRIES_FILE = DATA_DIR / "inquiries.txt"


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    organization: str = Field(..., min_length=2, max_length=150)
    phone: Optional[str] = Field(None, max_length=20)
    initiative: Optional[str] = Field(None, max_length=100)
    message: str = Field(..., min_length=10, max_length=2000)


class ContactResponse(BaseModel):
    success: bool
    message: str


INITIATIVES = [
    {
        "id": "heritage",
        "title": "Adopt-a-Heritage Project",
        "icon": "🏛",
        "description": "Fund structural restoration of historic temples under CSR mandate of Protection of National Heritage.",
        "category": "Heritage",
    },
    {
        "id": "mobility",
        "title": "Gift of Mobility Drive",
        "icon": "🦿",
        "description": "Sponsor prosthetic limbs or wheelchairs for physically disabled children.",
        "category": "Healthcare",
    },
    {
        "id": "mothers",
        "title": "Dignity for Mothers Initiative",
        "icon": "👩‍🦳",
        "description": "Vocational training for elderly widows in Vrindavan focusing on crafts and sustainable livelihood.",
        "category": "Livelihood",
    },
    {
        "id": "ghat",
        "title": "Ghat Hygiene Initiative",
        "icon": "🧹",
        "description": "Corporate support for cleanliness, waste management and sanitation around Varanasi ghats.",
        "category": "Environment",
    },
    {
        "id": "water",
        "title": "Safe Drinking Water Stations",
        "icon": "🚰",
        "description": 'Sponsor "Piyaao" drinking water stations near Sangam in Prayagraj or Girivalam path in Tiruvannamalai.',
        "category": "Water & Sanitation",
    },
    {
        "id": "fodder",
        "title": "Sustainable Fodder Banks",
        "icon": "🌾",
        "description": "Partner to create supply chains for high-quality subsidized fodder for Goshalas.",
        "category": "Agriculture",
    },
]

IMPACT_STATS = [
    {"label": "Years of Service", "value": "8+", "suffix": ""},
    {"label": "CSR Initiatives", "value": "6", "suffix": ""},
    {"label": "States Reached", "value": "12", "suffix": "+"},
    {"label": "Lives Impacted", "value": "50K", "suffix": "+"},
]

TESTIMONIALS = [
    {
        "quote": "Charanvandan delivered transparent reporting and visible on-ground impact for our heritage restoration CSR.",
        "author": "CSR Head",
        "company": "National Manufacturing Co.",
    },
    {
        "quote": "Their Gift of Mobility program aligned perfectly with our Schedule VII healthcare mandate.",
        "author": "Director, Sustainability",
        "company": "TechBridge India Pvt. Ltd.",
    },
    {
        "quote": "We received regular photo updates and documentation—exactly what our board needed for compliance.",
        "author": "VP Corporate Affairs",
        "company": "GreenLeaf Agri Solutions",
    },
]


@app.get("/api/health")
def health():
    return {"status": "ok", "timestamp": datetime.utcnow().isoformat()}


@app.get("/api/initiatives")
def get_initiatives():
    return {"initiatives": INITIATIVES}


@app.get("/api/impact")
def get_impact():
    return {"stats": IMPACT_STATS, "testimonials": TESTIMONIALS}


@app.post("/api/contact", response_model=ContactResponse)
def submit_contact(payload: ContactRequest):
    line = (
        f"[{datetime.utcnow().isoformat()}] "
        f"{payload.name} <{payload.email}> | {payload.organization} | "
        f"Initiative: {payload.initiative or 'General'} | "
        f"Phone: {payload.phone or 'N/A'}\n"
        f"Message: {payload.message}\n"
        f"{'-' * 60}\n"
    )
    try:
        with INQUIRIES_FILE.open("a", encoding="utf-8") as f:
            f.write(line)
    except OSError as exc:
        raise HTTPException(status_code=500, detail="Could not save inquiry") from exc

    return ContactResponse(
        success=True,
        message="Thank you! Our CSR team will reach out within 2 business days.",
    )
