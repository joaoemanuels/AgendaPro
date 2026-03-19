import { useState } from "react";

import "./training-modal.styles.css";

function TrainingModal({ treino, isOpen, onClose, onDelete, onUpdate }) {
	const [isEditing, setIsEditing] = useState(false);
	const [form, setForm] = useState({});
	const [prevTrainingId, setPrevTrainingId] = useState(null);

	if (treino && treino.id !== prevTrainingId) {
		setForm(treino);
		setIsEditing(false);
		setPrevTrainingId(treino.id);
	}

	if (!isOpen || !treino) return null;

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
		setForm(treino);
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
					treino[name]
				)}
			</p>
		);
	}

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
					{renderField("Descrição", "descricao")}
					{renderField("Duração", "duracao")}
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
						onClick={() => onDelete(treino.id)}
					>
						Deletar
					</button>
				</div>
			</div>
		</div>
	);
}

export default TrainingModal;
