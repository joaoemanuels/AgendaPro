import sqlite3

DATABASE = "backend/database/database.db"


def get_connection():

    conn = sqlite3.connect(DATABASE)

    # permite acessar colunas pelo nome
    conn.row_factory = sqlite3.Row

    return conn