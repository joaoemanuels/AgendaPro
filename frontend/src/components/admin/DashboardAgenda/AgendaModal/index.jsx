import { useState } from "react";

import "./agenda-modal.styles.css";

function AgendaModal({ agenda, isOpen, onClose, onDelete, onUpdate }) {
	const [isEditing, setIsEditing] = useState(false);
	const [form, setForm] = useState({});
	const [prevAgendaId, setPrevAgendaId] = useState(null);

	if (agenda && agenda.id !== prevAgendaId) {
		setForm(agenda);
		setIsEditing(false);
		setPrevAgendaId(agenda.id);
	}

	if (!isOpen || !agenda) return null;

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
		setForm(agenda);
		setIsEditing(false);
	}

	function renderField(label, name, type = "text") {
		return (
			<p>
				<strong>{label}:</strong>{" "}
				{isEditing ? (
					<input
						type={type}
						name={name}
						value={form[name] || ""}
						onChange={handleChange}
					/>
				) : (
					agenda[name]
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
					<h2>Agendamento</h2>
				</div>

				<div className="modal-body">
					{renderField("Aluno", "nomeAluno")}
					{renderField("Personal", "nomePersonal")}
					{renderField("Serviço", "servico")}
					{renderField("Data", "data", "date")}

					<p>
						<strong>Horário:</strong>
						{isEditing ? (
							<>
								<input
									type="time"
									name="inicio"
									value={form.inicio || ""}
									onChange={handleChange}
								/>
								{" - "}
								<input
									type="time"
									name="fim"
									value={form.fim || ""}
									onChange={handleChange}
								/>
							</>
						) : (
							`${agenda.inicio} - ${agenda.fim}`
						)}
					</p>

					<p>
						<strong>Status:</strong>
						{isEditing ? (
							<select
								name="status"
								value={form.status || ""}
								onChange={handleChange}
							>
								<option value="pendente">Pendente</option>
								<option value="confirmado">Confirmado</option>
								<option value="cancelado">Cancelado</option>
							</select>
						) : (
							<span className={`agenda-status ${agenda.status}`}>
								{agenda.status}
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
						onClick={() => onDelete(agenda.id)}
					>
						Deletar
					</button>
				</div>
			</div>
		</div>
	);
}

export default AgendaModal;
