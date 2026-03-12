def agenda_do_dia(personal_id):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT 
            ag.id,
            a.nome AS aluno,
            t.nome AS treino,
            ag.inicio,
            ag.fim
        FROM agendamentos ag
        JOIN alunos a ON ag.aluno_id = a.id
        JOIN treinos t ON ag.treino_id = t.id
        WHERE ag.personal_id = %s
        AND DATE(ag.inicio) = CURRENT_DATE
        ORDER BY ag.inicio
    """, (personal_id,))

    agenda = cursor.fetchall()

    cursor.close()
    conn.close()

    return [dict(a) for a in agenda]