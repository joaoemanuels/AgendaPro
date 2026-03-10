CREATE TABLE planos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco NUMERIC(10,2) NOT NULL,
    sessoes_semana INTEGER NOT NULL,
    duracao_dias INTEGER NOT NULL,
    ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE personal (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    inicio_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    personal_id INTEGER NOT NULL,

    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,

    email VARCHAR(150) UNIQUE NOT NULL,
    senha TEXT NOT NULL,

    telefone VARCHAR(20),

    inicio_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (personal_id) REFERENCES personal(id)
);

CREATE TABLE assinaturas (
    id SERIAL PRIMARY KEY,

    aluno_id INTEGER NOT NULL,
    plano_id INTEGER NOT NULL,

    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,

    status VARCHAR(20) DEFAULT 'ativa',

    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (plano_id) REFERENCES planos(id)
);

CREATE TABLE treinos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    duracao_minutos INTEGER
);

CREATE TABLE disponibilidade_personal (
    id SERIAL PRIMARY KEY,

    personal_id INTEGER NOT NULL,

    dia_semana INTEGER CHECK (dia_semana BETWEEN 0 AND 6),

    inicio TIME NOT NULL,
    fim TIME NOT NULL,

    FOREIGN KEY (personal_id) REFERENCES personal(id)
);

CREATE TABLE agendamentos (
    id SERIAL PRIMARY KEY,

    aluno_id INTEGER NOT NULL,
    personal_id INTEGER NOT NULL,
    treino_id INTEGER NOT NULL,

    inicio TIMESTAMP NOT NULL,
    fim TIMESTAMP NOT NULL,

    status VARCHAR(20) DEFAULT 'agendado',

    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (personal_id) REFERENCES personal(id),
    FOREIGN KEY (treino_id) REFERENCES treinos(id)
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
    admin_id INTEGER,
    personal_id INTEGER,

    PRIMARY KEY (admin_id, personal_id),

    FOREIGN KEY (admin_id) REFERENCES admin(id),
    FOREIGN KEY (personal_id) REFERENCES personal(id)
);

