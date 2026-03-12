@echo off

echo Iniciando Backend...
cd backend
call venv\Scripts\activate
start /b uvicorn server:app --reload

echo Iniciando Frontend...
cd ..\frontend
npm run dev

pause