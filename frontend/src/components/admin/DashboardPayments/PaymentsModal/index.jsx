import { useState } from "react";

import "./payments-modal.styles.css";

function PaymentsModal({ pagamento, isOpen, onClose, onDelete, onUpdate }) {
	const [isEditing, setIsEditing] = useState(false);
	const [form, setForm] = useState({});
	const [prevPaymentsId, setPrevPaymentsId] = useState(null);

	if (pagamento && pagamento.id !== prevPaymentsId) {
		setForm(pagamento);
		setIsEditing(false);
		setPrevPaymentsId(pagamento.id);
	}

	if (!isOpen || !pagamento) return null;

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	function handleEditClick() {
		if (isEditing) {
			onUpdate(form);
			setIsEditing(false);
		} else {
			setIsEditing(true);
		}
	}

	function handleCancel() {
		setForm(pagamento);
		setIsEditing(false);
	}

	function renderField(label, name, type = "text") {
		return (
			<p>
				<strong>{label}:</strong>
				{isEditing ? (
					<input
						type={type}
						name={name}
						value={form[name] || ""}
						onChange={handleChange}
					/>
				) : (
					pagamento[name]
				)}
			</p>
		);
	}

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
					{renderField("Cliente", "nome")}
					{renderField("Plano", "plano")}
					{renderField("Valor", "valor")}
					{renderField("Data", "data", "date")}

					<p>
						<strong>Status:</strong>
						{isEditing ? (
							<select
								name="status"
								value={form.status || ""}
								onChange={handleChange}
							>
								<option value="pendente">Pendente</option>
								<option value="pago">pago</option>
							</select>
						) : (
							<span className={`payments-status ${pagamento.status}`}>
								{pagamento.status}
							</span>
						)}
					</p>
				</div>

				<div className="modal-actions">
					<button className="btn edit-btn" onClick={handleEditClick}>
						{isEditing ? "Salvar" : "Editar"}
					</button>

					{isEditing && (
						<button className="btn" onClick={handleCancel}>
							Cancelar
						</button>
					)}

					<button
						className="btn delete-btn"
						onClick={() => onDelete(pagamento.id)}
					>
						Deletar
					</button>
				</div>
			</div>
		</div>
	);
}

export default PaymentsModal;
