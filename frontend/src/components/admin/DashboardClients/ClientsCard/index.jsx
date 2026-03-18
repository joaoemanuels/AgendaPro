import "./clients-card.styles.css";

function ClientsCard({ aluno, plano, onEdit }) {
	return (
		<>
			<div className="client-card">
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
						<strong>Plano:</strong> {plano ? plano.nome : "Sem plano"}
					</p>
					<p>
						<strong>Início do Plano:</strong> {aluno.inicio_plano}
					</p>
					<p>
						<strong>Cadastro:</strong> {aluno.inicio_cadastro}
					</p>
				</div>
				<div className="client-footer">
					<button type="button" onClick={() => onEdit(aluno, plano)}>
						Editar
					</button>
				</div>
			</div>
		</>
	);
}

export default ClientsCard;
