import bcrypt
from datetime import datetime, timedelta
from database.conection import get_connection

print("ATENÇÃO: Esse script apaga e recria dados fakes do banco (AMBIENTE DE TESTE)")

if __name__ != "__main__":
    raise RuntimeError("Seed só pode ser executado diretamente.")

planos = [
    {"id": 1, "nome": "Plano Básico", "preco": 120, "sessoes_semana": 2, "duracao_dias": 30},
    {"id": 2, "nome": "Plano Intermediário", "preco": 180, "sessoes_semana": 3, "duracao_dias": 30},
    {"id": 3, "nome": "Plano Premium", "preco": 250, "sessoes_semana": 5, "duracao_dias": 30},
]

personals = [
    {"id": 1, "nome": "João Emanuel", "email": "joao.personal@gmail.com", "senha": "123456", "telefone": "83999123456", "inicio_cadastro": "2025-12-01"},
    {"id": 2, "nome": "Aline Marianna", "email": "aline.personal@gmail.com", "senha": "123456","telefone": "83999234567", "inicio_cadastro": "2025-12-05"},
]

alunos = [
    {"id": 1, "personal_id": 1, "nome": "Carlos", "sobrenome": "Silva", "email": "carlos.silva@gmail.com", "senha": "123456", "telefone": "83998123456", "inicio_cadastro": "2026-01-28", "plano_id": 1, "inicio_plano": "2026-02-01"},
    {"id": 2, "personal_id": 1, "nome": "Mariana", "sobrenome": "Souza", "email": "mariana.souza@gmail.com", "senha": "123456", "telefone": "83998234567", "inicio_cadastro": "2026-02-05", "plano_id": 2, "inicio_plano": "2026-02-10"},
    {"id": 3, "personal_id": 2, "nome": "Lucas", "sobrenome": "Pereira", "email": "lucas.pereira@gmail.com", "senha": "123456", "telefone": "83998345678", "inicio_cadastro": "2026-02-10", "plano_id": 1, "inicio_plano": "2026-02-12"},
    {"id": 4, "personal_id": 2, "nome": "Ana", "sobrenome": "Costa", "email": "ana.costa@gmail.com", "senha": "123456", "telefone": "83998456789", "inicio_cadastro": "2026-02-25", "plano_id": 3, "inicio_plano": "2026-03-01"},
]

admins = [
    {"id": 1, "nome": "Administrador", "email": "admin@sistema.com", "senha": "admin123", "funcao": "super_admin", "personal_id": 1, "inicio_cadastro": "2025-11-01"},
]

admin_personal = [
    {"admin_id": 1, "personal_id": 1},
]

treinos = [
    {"id": 1, "nome": "Treino Funcional", "descricao": "Treino voltado para resistência", "duracao_minutos": 60, "categoria": "funcional"},
    {"id": 2, "nome": "Hipertrofia", "descricao": "Treino focado em ganho de massa", "duracao_minutos": 60, "categoria": "musculacao"},
]

agendamentos = [
    {"id": 1, "aluno_id": 1, "personal_id": 1, "treino_id": 2, "inicio": "2026-03-01 08:00", "fim": "2026-03-01 09:00", "status": "confirmado"},
]


def popular_bd():
    conn = get_connection()
    cursor = conn.cursor()

    print("Conectado ao banco")

    cursor.execute("""
    TRUNCATE TABLE admin_personal, agendamentos, assinaturas, alunos, treinos, personal, planos, admin
    RESTART IDENTITY CASCADE;
    """)

    for p in planos:
        cursor.execute(
            "INSERT INTO planos (id, nome, preco, sessoes_semana, duracao_dias) VALUES (%s,%s,%s,%s,%s)",
            (p["id"], p["nome"], p["preco"], p["sessoes_semana"], p["duracao_dias"])
        )

    for p in personals:

        hash_senha = bcrypt.hashpw(p["senha"].encode(), bcrypt.gensalt()).decode()

        cursor.execute(
            "INSERT INTO personal (id, nome, email, senha, telefone, inicio_cadastro) VALUES (%s,%s,%s,%s,%s,%s)",
            (p["id"], p["nome"], p["email"], hash_senha, p["telefone"], p["inicio_cadastro"])
        )

    for a in alunos:

        hash_senha = bcrypt.hashpw(a["senha"].encode(), bcrypt.gensalt()).decode()

        cursor.execute(
            "INSERT INTO alunos (id, personal_id, nome, sobrenome, email, senha, telefone, inicio_cadastro) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)",
            (a["id"], a["personal_id"], a["nome"], a["sobrenome"], a["email"], hash_senha, a["telefone"], a["inicio_cadastro"])
        )

        plano = next(pl for pl in planos if pl["id"] == a["plano_id"])

        data_inicio = datetime.strptime(a["inicio_plano"], "%Y-%m-%d")
        data_fim = data_inicio + timedelta(days=plano["duracao_dias"])

        cursor.execute(
            "INSERT INTO assinaturas (aluno_id, plano_id, data_inicio, data_fim, status) VALUES (%s,%s,%s,%s,'ativa')",
            (a["id"], a["plano_id"], data_inicio.date(), data_fim.date())
        )

    for t in treinos:
        cursor.execute(
            "INSERT INTO treinos (id, nome, descricao, duracao_minutos, categoria) VALUES (%s,%s,%s,%s,%s)",
            (t["id"], t["nome"], t["descricao"], t["duracao_minutos"], t["categoria"])
        )

    for ag in agendamentos:
        cursor.execute(
            "INSERT INTO agendamentos (id, aluno_id, personal_id, treino_id, inicio, fim, status) VALUES (%s,%s,%s,%s,%s,%s,%s)",
            (ag["id"], ag["aluno_id"], ag["personal_id"], ag["treino_id"], ag["inicio"], ag["fim"], ag["status"])
        )

    for ad in admins:

        hash_senha = bcrypt.hashpw(ad["senha"].encode(), bcrypt.gensalt()).decode()

        cursor.execute(
            "INSERT INTO admin (id, nome, email, senha, funcao, inicio_cadastro) VALUES (%s,%s,%s,%s,%s,%s)",
            (ad["id"], ad["nome"], ad["email"], hash_senha, ad["funcao"], ad["inicio_cadastro"])
        )

    for ap in admin_personal:
        cursor.execute(
            "INSERT INTO admin_personal (admin_id, personal_id) VALUES (%s,%s)",
            (ap["admin_id"], ap["personal_id"])
        )

    conn.commit()

    cursor.close()
    conn.close()

    print("Banco populado com sucesso!")


def seed_database():
    print("Seeding database...")
    popular_bd()


if __name__ == "__main__":
    seed_database()