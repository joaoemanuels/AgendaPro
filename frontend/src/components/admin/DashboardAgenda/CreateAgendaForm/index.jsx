import { useState } from "react";

import "./create-agenda-form.styles.css";

function CreateAgendaForm({ onCreate }) {
	const [form, setForm] = useState({
		inicio: "",
		fim: "",
		nomeAluno: "",
		servico: "",
		nomePersonal: "",
		data: "",
		status: "",
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
			<div className="form-training-horario">
				<div className="form-training-horario_left">
					<p>Horário início</p>
					<input
						type="time"
						name="inicio"
						value={form.inicio}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="form-training-horario_right">
					<p>Horário Fim</p>
					<input
						type="time"
						name="fim"
						value={form.fim}
						onChange={handleChange}
						required
					/>
				</div>
			</div>

			<input
				type="text"
				name="nomeAluno"
				placeholder="Nome do aluno"
				value={form.nomeAluno}
				onChange={handleChange}
				required
			/>

			<select
				name="servico"
				value={form.servico}
				onChange={handleChange}
				required
			>
				<option value="">Selecione o serviço</option>
				<option value="cardio">cardio</option>
				<option value="forca">PowerLift</option>
				<option value="funcional">Calistenia</option>
				<option value="musculacao">Musculação</option>
				<option value="mobilidade">Yoga</option>
				<option value="mobilidade">Pilates</option>
				<option value="cardio">HIIT</option>
				<option value="funcional">Treino Funcional</option>
				<option value="core">Core Training</option>
				<option value="Mobilidade">mobilidade</option>
			</select>

			<input
				type="text"
				name="nomePersonal"
				placeholder="Personal"
				value={form.nomePersonal}
				onChange={handleChange}
				required
			/>

			<input
				type="date"
				name="data"
				value={form.data}
				onChange={handleChange}
				required
			/>

			<select
				name="status"
				value={form.status}
				onChange={handleChange}
				required
			>
				<option value="">Selecione o status</option>
				<option value="confirmado">Confirmado</option>
				<option value="pendente">Pendente</option>
				<option value="cancelado">Cancelado</option>
			</select>

			<button type="submit">Salvar</button>
		</form>
	);
}

export default CreateAgendaForm;
