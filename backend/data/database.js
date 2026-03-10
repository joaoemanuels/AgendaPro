export const alunos = [
	{
		id: 1,
		nome: "Carlos",
		sobrenome: "Silva",
		email: "carlos.silva@gmail.com",
		senha: "hash123",
		telefone: "83998123456",
		plano_id: 1,
		inicio_plano: "2026-02-01",
		inicio_cadastro: "2026-01-28",
	},
	{
		id: 2,
		nome: "Mariana",
		sobrenome: "Souza",
		email: "mariana.souza@gmail.com",
		senha: "hash456",
		telefone: "83998234567",
		plano_id: 2,
		inicio_plano: "2026-02-10",
		inicio_cadastro: "2026-02-05",
	},
	{
		id: 3,
		nome: "Lucas",
		sobrenome: "Pereira",
		email: "lucas.pereira@gmail.com",
		senha: "hash789",
		telefone: "83998345678",
		plano_id: 1,
		inicio_plano: "2026-02-12",
		inicio_cadastro: "2026-02-10",
	},
	{
		id: 4,
		nome: "Ana",
		sobrenome: "Costa",
		email: "ana.costa@gmail.com",
		senha: "hash321",
		telefone: "83998456789",
		plano_id: 3,
		inicio_plano: "2026-03-01",
		inicio_cadastro: "2026-02-25",
	},
	{
		id: 5,
		nome: "Rafael",
		sobrenome: "Almeida",
		email: "rafael.almeida@gmail.com",
		senha: "hash654",
		telefone: "83998567890",
		plano_id: 2,
		inicio_plano: "2026-03-05",
		inicio_cadastro: "2026-03-02",
	},
	{
		id: 6,
		nome: "Beatriz",
		sobrenome: "Fernandes",
		email: "beatriz.fernandes@gmail.com",
		senha: "hash987",
		telefone: "83998678901",
		plano_id: 1,
		inicio_plano: "2026-03-08",
		inicio_cadastro: "2026-03-06",
	},
	{
		id: 7,
		nome: "Thiago",
		sobrenome: "Moura",
		email: "thiago.moura@gmail.com",
		senha: "hash147",
		telefone: "83998789012",
		plano_id: 3,
		inicio_plano: "2026-03-10",
		inicio_cadastro: "2026-03-08",
	},
	{
		id: 8,
		nome: "Juliana",
		sobrenome: "Ribeiro",
		email: "juliana.ribeiro@gmail.com",
		senha: "hash258",
		telefone: "83998890123",
		plano_id: 2,
		inicio_plano: "2026-03-12",
		inicio_cadastro: "2026-03-10",
	},
];

export const personals = [
	{
		id: 1,
		nome: "João Emanuel",
		email: "joao.personal@gmail.com",
		telefone: "83999123456",
		inicio_cadastro: "2025-12-01",
	},
	{
		id: 2,
		nome: "Aline Marianna",
		email: "aline.personal@gmail.com",
		telefone: "83999234567",
		inicio_cadastro: "2025-12-05",
	},
];

export const planos = [
	{
		id: 1,
		nome: "Plano Básico",
		preco: 120,
		secoes_semana: 2,
		duracao_dias: 30,
	},
	{
		id: 2,
		nome: "Plano Intermediário",
		preco: 180,
		secoes_semana: 3,
		duracao_dias: 30,
	},
	{
		id: 3,
		nome: "Plano Premium",
		preco: 250,
		secoes_semana: 5,
		duracao_dias: 30,
	},
];

export const treinos = [
	{
		id: 1,
		nome: "Treino Funcional",
		descricao: "Treino voltado para resistência",
		duracao: 60,
		categoria: "funcional",
	},
	{
		id: 2,
		nome: "Hipertrofia",
		descricao: "Treino focado em ganho de massa",
		duracao: 60,
		categoria: "musculacao",
	},
	{
		id: 3,
		nome: "HIIT",
		descricao: "Treino intervalado de alta intensidade",
		duracao: 45,
		categoria: "hiit",
	},
	{
		id: 4,
		nome: "Cardio Leve",
		descricao:
			"Treino cardiovascular de baixa intensidade, ideal para iniciantes",
		duracao: 30,
		categoria: "cardio",
	},
	{
		id: 5,
		nome: "Cardio Intenso",
		descricao:
			"Treino cardiovascular avançado para queima de gordura e resistência",
		duracao: 50,
		categoria: "cardio",
	},
	{
		id: 6,
		nome: "PowerLift Iniciante",
		descricao: "Treino de força básico com levantamento de peso controlado",
		duracao: 45,
		categoria: "powerlift",
	},
	{
		id: 7,
		nome: "PowerLift Avançado",
		descricao:
			"Treino de força avançado com cargas maiores e técnicas de performance",
		duracao: 60,
		categoria: "powerlift",
	},
	{
		id: 8,
		nome: "Calistenia Básica",
		descricao: "Treino de peso corporal para melhorar força e mobilidade",
		duracao: 40,
		categoria: "calistenia",
	},
	{
		id: 9,
		nome: "Calistenia Avançada",
		descricao:
			"Treino intenso de calistenia com movimentos complexos e progressivos",
		duracao: 60,
		categoria: "calistenia",
	},
	{
		id: 10,
		nome: "Musculação Foco Braços",
		descricao: "Treino de musculação voltado para braços e membros superiores",
		duracao: 50,
		categoria: "musculacao",
	},
	{
		id: 11,
		nome: "Musculação Full Body",
		descricao:
			"Treino de musculação para todos os grupos musculares principais",
		duracao: 60,
		categoria: "musculacao",
	},
	{
		id: 12,
		nome: "Yoga Relaxamento",
		descricao: "Sessão de Yoga leve para alongamento e relaxamento",
		duracao: 45,
		categoria: "yoga",
	},
	{
		id: 13,
		nome: "Yoga Força",
		descricao: "Treino de Yoga voltado para força e equilíbrio",
		duracao: 60,
		categoria: "yoga",
	},
	{
		id: 14,
		nome: "Pilates Core",
		descricao: "Pilates focado em fortalecimento do core e postura",
		duracao: 50,
		categoria: "pilates",
	},
	{
		id: 15,
		nome: "Pilates Avançado",
		descricao:
			"Pilates avançado com exercícios complexos de estabilidade e flexibilidade",
		duracao: 60,
		categoria: "pilates",
	},
];

export const disponibilidadePersonal = [
	{
		id: 1,
		treinos_id: 1,
		dia_semana: "segunda",
		inicio: "08:00",
		fim: "09:00",
	},
	{
		id: 2,
		treinos_id: 2,
		dia_semana: "terça",
		inicio: "10:00",
		fim: "11:00",
	},
];

export const agendamentos = [
	{
		id: 1,
		aluno_id: 1,
		personal_id: 1,
		treino_id: 2,
		data_cadastro: "2026-03-01",
		status: "confirmado",
		inicio_cadastro: "2026-02-28",
	},
];

export const admins = [
	{
		id: 1,
		nome: "Administrador",
		email: "admin@sistema.com",
		senha: "hashadmin",
		personal_id: 1,
		funcao: "super_admin",
		inicio_cadastro: "2025-11-01",
	},
];
