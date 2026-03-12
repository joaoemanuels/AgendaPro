import os
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from login.views import router as login_router

app = FastAPI()

app.include_router(login_router, prefix="/auth", tags=["login"])

origins = [
    "http://localhost:5173",
    "https://agendapro.fun",
    "https://agenda-pro-cyan-iota.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to AgendaPro API!"}
