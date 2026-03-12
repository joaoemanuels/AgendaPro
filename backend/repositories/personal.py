from ..database.conection import get_connection

def criar_personal(nome, email, senha):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO personal (nome, email, senha)
        VALUES (%s, %s, %s)
    """, (nome, email, senha))

    conn.commit()

    cursor.close()
    conn.close()