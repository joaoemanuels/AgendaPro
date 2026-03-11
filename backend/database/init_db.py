from .conection import get_connection


def init_db():

    conn = get_connection()

    with open("backend/database/schema.sql", "r", encoding="utf-8") as f:
        sql_script = f.read()

    conn.executescript(sql_script)

    conn.commit()
    conn.close()

    print("Banco inicializado com sucesso!")


if __name__ == "__main__":
    init_db()