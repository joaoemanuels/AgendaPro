from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from login.views import router as login_router

app = FastAPI()

app.include_router(login_router, prefix="/auth", tags=["login"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou ["http://localhost:3000"] se quiser restringir
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to AgendaPro API!"}

