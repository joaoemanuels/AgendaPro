import "./clients-card.styles.css";

function ClientsCard({ client, onEdit, onDelete }) {
	return (
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
					<strong>Plano:</strong> {client.plano || "Sem plano"}
				</p>
				<p>
					<strong>Início do Plano:</strong> {client.inicio_plano || "Sem dados"}
				</p>
				<p>
					<strong>Cadastro:</strong> {client.inicio_cadastro || "Sem dados"}
				</p>
			</div>
			<div className="client-footer">
				<button type="button" onClick={() => onEdit(client)}>
					Editar
				</button>

				<button className="btn delete-btn" onClick={onDelete}>
					Deletar
				</button>
			</div>
		</div>
	);
}

export default ClientsCard;
