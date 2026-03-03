from fastapi import APIRouter
from pydantic import BaseModel
from .controllers import register_user, login_user

router = APIRouter()

class User(BaseModel):
    email: str
    senha: str

@router.post("/register")
def register(user: User):
    return register_user(user.email, user.senha)

@router.post("/login")
def login(user: User):
    return login_user(user.email, user.senha)