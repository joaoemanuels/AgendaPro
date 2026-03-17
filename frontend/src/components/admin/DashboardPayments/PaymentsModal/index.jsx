import "./payments-modal.styles.css";

function PaymentsModal({ pagamento, isOpen, onClose, onEdit, onDelete }) {
	if (!isOpen || !pagamento) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					X
				</button>

				<div className="modal-header">
					<h2>Agendamento</h2>
				</div>
				<div className="modal-body">
					<p>
						<strong>Cliente:</strong> {pagamento.nome}
					</p>
					<p>
						<strong>Plano:</strong> {pagamento.plano}
					</p>
					<p>
						<strong>Valor:</strong> R$ {pagamento.valor}
					</p>
					<p>
						<strong>Data:</strong> {pagamento.data}
					</p>
					<p>
						<strong>Status:</strong> {pagamento.status}
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

export default PaymentsModal;
