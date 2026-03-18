import { useState } from "react";

import "./create-training-form.styles.css";

function CreateTrainingForm({ onCreate }) {
	const [form, setForm] = useState({
		nome: "",
		descricao: "",
		duracao: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();

		const novoTreino = {
			id: Date.now(),
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

			<button type="submit">Salvar</button>
		</form>
	);
}

export default CreateTrainingForm;
