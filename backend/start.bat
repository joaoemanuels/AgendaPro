@echo off
call venv\Scripts\activate
uvicorn server:app --reload
pause