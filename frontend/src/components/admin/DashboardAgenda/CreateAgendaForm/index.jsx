import { useState } from "react";

import "./create-agenda-form.styles.css";

function CreateAgendaForm({ onCreate }) {
	const [form, setForm] = useState({
		horario: "00:00",
		nome: "",
		servico: "",
		personal: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();

		const novoAgendamento = {
			id: Date.now(),
			...form,
		};

		onCreate(novoAgendamento);
	}

	return (
		<form onSubmit={handleSubmit} className="form-training">
			<input
				type="time"
				name="horario"
				placeholder="Selecione um horário"
				value={form.horario || ""}
				onChange={handleChange}
				required
			/>
			<input
				type="text"
				name="nome"
				placeholder="Nome"
				value={form.nome}
				onChange={handleChange}
				required
			/>
			<input
				type="text"
				name="servico"
				placeholder="Serviço"
				value={form.servico}
				onChange={handleChange}
				required
			/>
			<input
				type="text"
				name="personal"
				placeholder="Personal"
				value={form.personal}
				onChange={handleChange}
				required
			/>

			<button type="submit">Salvar</button>
		</form>
	);
}

export default CreateAgendaForm;
