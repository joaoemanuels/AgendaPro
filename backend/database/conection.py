import os
from dotenv import load_dotenv
import psycopg2
import psycopg2.extras

load_dotenv()

DATABASE_HOST = os.getenv("DATABASE_HOST")
DATABASE_NAME = os.getenv("DATABASE_NAME")
DATABASE_USER = os.getenv("DATABASE_USER")
DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD")
DATABASE_PORT = os.getenv("DATABASE_PORT")

def get_connection():

    conn = psycopg2.connect(
        host=DATABASE_HOST,
        database=DATABASE_NAME,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        port=DATABASE_PORT,
        sslmode="require",
        cursor_factory=psycopg2.extras.RealDictCursor
    )

    return conn