import "./training-modal.styles.css";

function TrainingModal({ treino, isOpen, onClose, onEdit, onDelete }) {
	if (!isOpen || !treino) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					×
				</button>

				<div className="modal-header">
					<h2>{treino.nome}</h2>
				</div>

				<div className="modal-body">
					<p>
						<strong>Descrição:</strong> {treino.descricao}
					</p>
					<p>
						<strong>Duração:</strong> {treino.duracao} min
					</p>
					<p>
						<strong>Categoria:</strong> {treino.categoria}
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

export default TrainingModal;
