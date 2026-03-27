import { useState } from "react";

import "./clients-modal.styles.css";

function ClientsModal({ aluno, isOpen, onClose, onDelete, onUpdate }) {
	const [isEditing, setIsEditing] = useState(false);
	const [form, setForm] = useState({});
	const [prevClientId, setPrevClientId] = useState(null);

	if (aluno && aluno.id !== prevClientId) {
		setForm(aluno);
		setIsEditing(false);
		setPrevClientId(aluno.id);
	}

	if (!isOpen || !aluno) return null;

	function handleChange(evento) {
		const { name, value } = evento.target;
		setForm((prev) => ({ ...prev, [name]: value }));
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
		setForm(aluno);
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
					aluno[name]
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

				<div className="modal-body">
					{renderField("Nome", "nome")}
					{renderField("Email", "email")}
					{renderField("Telefone", "telefone")}
					{renderField("Plano", "plano")}
					{renderField("Início do plano", "inicio_plano")}
					{renderField("Início do cadastro", "inicio_cadastro")}
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

					<button className="btn delete-btn" onClick={() => onDelete(aluno.id)}>
						Deletar
					</button>
				</div>
			</div>
		</div>
	);
}

export default ClientsModal;
