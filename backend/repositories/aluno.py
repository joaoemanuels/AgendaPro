from ..database.conection import get_connection


def listar_alunos():

    conn = get_connection()

    alunos = conn.execute("""
        SELECT *
        FROM alunos
        ORDER BY nome
    """).fetchall()

    conn.close()

    return [dict(a) for a in alunos]


def buscar_aluno_por_id(aluno_id):

    conn = get_connection()

    aluno = conn.execute("""
        SELECT *
        FROM alunos
        WHERE id = ?
    """, (aluno_id,)).fetchone()

    conn.close()

    return dict(aluno) if aluno else None


def criar_aluno(nome, sobrenome, email, senha, telefone, personal_id):

    conn = get_connection()

    conn.execute("""
        INSERT INTO alunos
        (nome, sobrenome, email, senha, telefone, personal_id)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (nome, sobrenome, email, senha, telefone, personal_id))

    conn.commit()
    conn.close()