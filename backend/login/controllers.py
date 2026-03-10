import json 
import bcrypt
import os

from fastapi import HTTPException, status
from jose import jwt
from pathlib import Path
from datetime import datetime, timedelta


BASE_DIR = Path(__file__).resolve().parent
DATA_FILE = BASE_DIR / "users.json"

SECRET = os.getenv("JWT_SECRET", "dev_secret")
ALGORITHM = "HS256"

if not DATA_FILE.exists():
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump([], f)

def load_users():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def save_users(users):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(users, f, indent=2)

def register_user(email: str, senha: str):
    users = load_users()
    print("ANTES:", users)

    if not email or not senha:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Preencha todos os campos.")
    
    if any(u["email"] == email for u in users):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Já existe um cadastro com este e-mail.")
    
    hashed = bcrypt.hashpw(senha.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

    new_user = {
        "id": len(users) + 1,
        "email": email,
        "senha": hashed,
        "created_at": datetime.utcnow().isoformat()
    }
    users.append(new_user)
    save_users(users)

    return {"message": "cadastro criado com sucesso."}

def login_user(email: str, senha: str):
    users = load_users()
    print("LOGIN USERS:", users)

    user = next((u for u in users if u["email"] == email), None)

    if not user or not bcrypt.checkpw(
        senha.encode("utf-8"),
        user["senha"].encode("utf-8")
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="E-mail ou senha inválidos."
        )

    payload = {
        "email": email,
        "exp": datetime.utcnow() + timedelta(hours=8)
    }

    token = jwt.encode(payload, SECRET, algorithm=ALGORITHM)

    return {
    "message": "Login realizado com sucesso!",
    "token": token,
    "user": {
        "email": email
    }
}