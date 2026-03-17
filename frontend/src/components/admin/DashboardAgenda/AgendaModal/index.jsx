import "./agenda-modal.styles.css";

function AgendaModal({ agenda, isOpen, onClose, onEdit, onDelete }) {
	if (!isOpen || !agenda) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					×
				</button>

				<div className="modal-header">
					<h2>Agendamento</h2>
				</div>

				<div className="modal-body">
					<p>
						<strong>Aluno:</strong> {agenda.nomeAluno}
					</p>

					<p>
						<strong>Personal:</strong> {agenda.nomePersonal}
					</p>

					<p>
						<strong>Serviço:</strong> {agenda.servico}
					</p>

					<p>
						<strong>Data:</strong> {agenda.data}
					</p>

					<p>
						<strong>Horário:</strong> {agenda.inicio} - {agenda.fim}
					</p>

					<p>
						<span className={`agenda-status ${agenda.status}`}>
							{agenda.status}
						</span>
					</p>
				</div>

				<div className="modal-actions">
					<button className="btn edit-btn" onClick={onEdit}>
						Editar
					</button>

					<button className="btn delete-btn" onClick={onDelete}>
						Deletar
					</button>
				</div>
			</div>
		</div>
	);
}

export default AgendaModal;
