from conection import get_connection
from pathlib import Path


def init_db():
    conn = get_connection()
    cursor = conn.cursor()

    BASE_DIR = Path(__file__).resolve().parent
    schema_path = BASE_DIR / "schema.sql"

    with open(schema_path, "r", encoding="utf-8") as f:
        sql_script = f.read()

    commands = sql_script.split(";")

    for command in commands:
        if command.strip():
            cursor.execute(command)

    conn.commit()
    cursor.close()
    conn.close()

    print("Banco inicializado com sucesso!")


if __name__ == "__main__":
    init_db()