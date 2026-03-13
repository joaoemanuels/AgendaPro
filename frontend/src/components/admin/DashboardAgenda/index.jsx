import "./dashboard-agenda.styles.css";

function DashboardAgenda() {
	const agendamentos = [
		{
			id: 1,
			alunoId: 3,
			nomeAluno: "João",
			personalId: 1,
			nomePersonal: "Carlos",
			data: "2026-03-13",
			inicio: "08:00",
			fim: "09:00",
			servico: "Treino Personal",
			status: "confirmado",
		},
		{
			id: 2,
			alunoId: 5,
			nomeAluno: "Maria",
			personalId: 1,
			nomePersonal: "Carlos",
			data: "2026-03-13",
			inicio: "10:00",
			fim: "11:00",
			servico: "Aula em grupo",
			status: "pendente",
		},
		{
			id: 2,
			alunoId: 5,
			nomeAluno: "Maria",
			personalId: 1,
			nomePersonal: "Carlos",
			data: "2026-03-13",
			inicio: "10:00",
			fim: "11:00",
			servico: "Aula em grupo",
			status: "pendente",
		},
		{
			id: 2,
			alunoId: 5,
			nomeAluno: "Maria",
			personalId: 1,
			nomePersonal: "Carlos",
			data: "2026-03-13",
			inicio: "10:00",
			fim: "11:00",
			servico: "Aula em grupo",
			status: "pendente",
		},
		{
			id: 2,
			alunoId: 5,
			nomeAluno: "Maria",
			personalId: 1,
			nomePersonal: "Carlos",
			data: "2026-03-13",
			inicio: "10:00",
			fim: "11:00",
			servico: "Aula em grupo",
			status: "pendente",
		},
	];

	return (
		<div className="dashboard-agenda">
			<h1>Agenda do Dia</h1>

			<ul>
				{agendamentos.map((a) => (
					<li key={a.id} className="agenda-item">
						<div className="agenda-hora">
							{a.inicio} - {a.fim}
						</div>

						<div className="agenda-info">
							<span className="agenda-nome">Aluno: {a.nomeAluno}</span>

							<span className="agenda-servico">Serviço: {a.servico}</span>

							<span className="agenda-personal">
								Personal: {a.nomePersonal}
							</span>

							<span className="agenda-data">Data: {a.data}</span>

							<span className={`agenda-status ${a.status}`}>
								Status: {a.status}
							</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default DashboardAgenda;
