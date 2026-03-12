from ..database.conection import get_connection


def listar_alunos():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM alunos
        ORDER BY nome
    """)

    alunos = cursor.fetchall()

    cursor.close()
    conn.close()

    return [dict(a) for a in alunos]



def buscar_aluno_por_id(aluno_id):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM alunos
        WHERE id = %s
    """, (aluno_id,))

    aluno = cursor.fetchone()

    cursor.close()
    conn.close()

    return dict(aluno) if aluno else None


def criar_aluno(nome, sobrenome, email, senha, telefone, personal_id):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO alunos
        (nome, sobrenome, email, senha, telefone, personal_id)
        VALUES (%s, %s, %s, %s, %s, %s)
    """, (nome, sobrenome, email, senha, telefone, personal_id))

    conn.commit()

    cursor.close()
    conn.close()