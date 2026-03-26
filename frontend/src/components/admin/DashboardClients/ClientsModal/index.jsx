import "./clients-modal.styles.css";

function ClientsModal({ aluno, isOpen, onClose }) {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					×
				</button>
				<div className="modal-header">
					<h2>
						{aluno.nome} {aluno.sobrenome}
					</h2>
				</div>

				<div className="modal-body">
					<p>
						<strong>Email:</strong> {aluno.email}
					</p>
					<p>
						<strong>Telefone:</strong> {aluno.telefone}
					</p>
					<p>
						<strong>Plano:</strong>
						{aluno.plano ? aluno.plano.nome : "Sem plano"}
					</p>
					<p>
						<strong>Início do Plano:</strong> {aluno.inicio_plano}
					</p>
					<p>
						<strong>Cadastro:</strong> {aluno.inicio_cadastro}
					</p>
				</div>

				<div className="modal-actions">
					<button className="btn edit-btn">Salvar</button>
					<button className="btn delete-btn">Cancelar</button>
				</div>
			</div>
		</div>
	);
}

export default ClientsModal;
