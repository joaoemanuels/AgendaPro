from fastapi import APIRouter
from pydantic import BaseModel
from .controllers import register_user, login_user

router = APIRouter()

class UserRegister(BaseModel):
    nome: str
    email: str
    senha: str

class UserLogin(BaseModel):
    email: str
    senha: str

@router.post("/register")
def register(user: UserRegister):
    return register_user(user.email, user.senha, user.nome)

@router.post("/login")
def login(user: UserLogin):
    return login_user(user.email, user.senha)