import "./clients-card.styles.css";

function ClientsCard({ client, onEdit }) {
	return (
		<>
			<div className="client-card">
				<div className="client-header">
					<h3>{client.nome}</h3>
					<p>{client.email}</p>
				</div>
				<div className="client-body">
					<p>
						<strong>Telefone:</strong> {client.telefone}
					</p>
					<p>
						<strong>Plano:</strong> {"Sem plano"}
					</p>
					<p>
						<strong>Início do Plano:</strong> {client.inicio_plano}
					</p>
					<p>
						<strong>Cadastro:</strong> {client.inicio_cadastro}
					</p>
				</div>
				<div className="client-footer">
					<button type="button" onClick={() => onEdit(client)}>
						Editar
					</button>

					<button className="btn delete-btn">Deletar</button>
				</div>
			</div>
		</>
	);
}

export default ClientsCard;
