import { alunos, planos } from "../../../../../backend/data/database";
import "./dashboard-clients.styles.css";

function DashboardClients() {
	return (
		<div className="dashboard-clients">
			<h1>Clientes</h1>

			<div className="clients-container">
				{alunos.map((aluno) => {
					const planoAluno = planos.find((p) => p.id === aluno.plano_id);

					return (
						<div key={aluno.id} className="client-card">
							<div className="client-header">
								<h3>
									{aluno.nome} {aluno.sobrenome}
								</h3>
								<p>{aluno.email}</p>
							</div>

							<div className="client-body">
								<p>
									<strong>Telefone:</strong> {aluno.telefone}
								</p>
								<p>
									<strong>Plano:</strong>
									{planoAluno ? planoAluno.nome : "Sem plano"}
								</p>
								<p>
									<strong>Início do Plano:</strong> {aluno.inicio_plano}
								</p>
								<p>
									<strong>Cadastro:</strong> {aluno.inicio_cadastro}
								</p>
							</div>

							<div className="client-footer">
								<button type="button">Detalhes</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default DashboardClients;
