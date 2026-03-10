from ..database.conection import get_connection


def agenda_do_dia(personal_id):

    conn = get_connection()

    agenda = conn.execute("""
        SELECT 
            ag.id,
            a.nome AS aluno,
            t.nome AS treino,
            ag.inicio,
            ag.fim
        FROM agendamentos ag
        JOIN alunos a ON ag.aluno_id = a.id
        JOIN treinos t ON ag.treino_id = t.id
        WHERE ag.personal_id = ?
        AND DATE(ag.inicio) = DATE('now')
        ORDER BY ag.inicio
    """, (personal_id,)).fetchall()

    conn.close()

    return [dict(a) for a in agenda]