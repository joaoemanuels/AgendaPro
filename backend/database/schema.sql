CREATE TABLE planos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco NUMERIC(10,2) NOT NULL,
    sessoes_semana INTEGER NOT NULL,
    duracao_dias INTEGER NOT NULL
);

CREATE TABLE personal (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    role VARCHAR(100),
    whatsapp VARCHAR(50),
    instagram VARCHAR(50),
    twitter VARCHAR(50),
    image TEXT,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    telefone VARCHAR(20),
    inicio_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    personal_id INTEGER REFERENCES personal(id),
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    telefone VARCHAR(20),
    inicio_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE assinaturas (
    id SERIAL PRIMARY KEY,
    aluno_id INTEGER NOT NULL REFERENCES alunos(id),
    plano_id INTEGER NOT NULL REFERENCES planos(id),
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'ativa'
);

CREATE TABLE treinos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    duracao_minutos INTEGER,
    categoria VARCHAR(50)
);

CREATE TABLE agendamentos (
    id SERIAL PRIMARY KEY,
    aluno_id INTEGER NOT NULL REFERENCES alunos(id),
    personal_id INTEGER NOT NULL REFERENCES personal(id),
    treino_id INTEGER NOT NULL REFERENCES treinos(id),
    inicio TIMESTAMP NOT NULL,
    fim TIMESTAMP NOT NULL,
    status VARCHAR(20) DEFAULT 'agendado',
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    funcao VARCHAR(100),
    inicio_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admin_personal (
    admin_id INTEGER NOT NULL REFERENCES admin(id),
    personal_id INTEGER NOT NULL REFERENCES personal(id),
    PRIMARY KEY(admin_id, personal_id)
);
