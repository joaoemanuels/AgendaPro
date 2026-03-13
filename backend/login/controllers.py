import bcrypt
import os

from fastapi import HTTPException, status
from database.conection import get_connection
from jose import jwt
from datetime import datetime, timedelta


SECRET = os.getenv("JWT_SECRET", "dev_secret")
ALGORITHM = "HS256"


def register_user(email: str, senha: str, nome: str = None):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM admin WHERE email = %s",
        (email,)
    )

    user = cursor.fetchone()

    if user:
        cursor.close()
        conn.close()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Já existe um cadastro com este e-mail."
        )

    hashed = bcrypt.hashpw(senha.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

    cursor.execute(
        "INSERT INTO admin (nome, email, senha) VALUES (%s, %s, %s)",
        (nome, email, hashed)
    )

    conn.commit()

    cursor.close()
    conn.close()

    return {"message": "cadastro criado com sucesso."}


def login_user(email: str, senha: str):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM admin WHERE email = %s",
        (email,)
    )

    user = cursor.fetchone()

    user_type = "admin"

    if not user:
        cursor.execute(
            "SELECT id, nome, email, senha FROM personal WHERE email = %s",
            (email,)
        )
        user = cursor.fetchone()
        user_type = "personal"

    cursor.close()
    conn.close()

    if not user or not bcrypt.checkpw(
        senha.encode("utf-8"),
        user["senha"].encode("utf-8")
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="E-mail ou senha inválidos."
        )

    payload = {
        "user_id": user["id"],
        "email": user["email"],
        "role": user_type,
        "exp": datetime.utcnow() + timedelta(hours=8)
    }

    token = jwt.encode(payload, SECRET, algorithm=ALGORITHM)

    return {
        "message": "Login realizado com sucesso!",
        "token": token,
        "user": {
            "id": user["id"],
            "email": user["email"],
            "nome": user["nome"],
            "role": user_type
        }
    }