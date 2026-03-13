import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import "./dashboard-clients.styles.css";

function DashboardClients() {
	const [alunos, setAlunos] = useState([]);
	const [planos, setPlanos] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const personalIdDoAdmin = 1;

			const { data: alunosData, error: alunosError } = await supabase
				.from("alunos")
				.select("*")
				.eq("personal_id", personalIdDoAdmin);
			console.log("alunosData:", alunosData);
			console.log("erro:", alunosError);

			if (alunosError) {
				console.error("Erro ao buscar alunos:", alunosError);
			} else {
				setAlunos(alunosData);
			}

			const { data: planosData, error: planosError } = await supabase
				.from("planos")
				.select("*");

			if (planosError) {
				console.error("Erro ao buscar planos:", planosError);
			} else {
				setPlanos(planosData);
			}
		}

		fetchData();
	}, []);

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
