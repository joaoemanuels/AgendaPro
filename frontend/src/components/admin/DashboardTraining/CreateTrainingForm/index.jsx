import { useState } from "react";

import "./create-training-form.styles.css";

function CreateTrainingForm({ onCreate }) {
	const [form, setForm] = useState({
		nome: "",
		descricao: "",
		categoria: "",
		duracao: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		const novoTreino = {
			...form,
		};
		onCreate(novoTreino);
	}

	return (
		<form onSubmit={handleSubmit} className="form-training">
			<input
				type="text"
				name="nome"
				placeholder="Nome"
				value={form.nome}
				onChange={handleChange}
				required
			/>

			<textarea
				type="text"
				name="descricao"
				placeholder="Descrição"
				value={form.descricao}
				onChange={handleChange}
				required
			/>

			<input
				type="number"
				name="duracao"
				placeholder="Duração"
				value={form.duracao}
				onChange={handleChange}
				required
			/>

			<select
				name="categoria"
				value={form.categoria}
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

			<button type="submit">Salvar</button>
		</form>
	);
}

export default CreateTrainingForm;
