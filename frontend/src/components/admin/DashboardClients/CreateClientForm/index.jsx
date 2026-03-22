import { useState } from "react";

import "./create-client-form.styles.css";

function CreateClientForm({ onSubmit }) {
	const [form, setForm] = useState({
		nome: "",
		email: "",
		telefone: "",
		plano_id: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();

		const novoAluno = {
			...form,
		};

		onSubmit(novoAluno);
	}

	return (
		<form onSubmit={handleSubmit} className="form-client">
			<input
				type="text"
				name="nome"
				placeholder="Nome"
				value={form.nome}
				onChange={handleChange}
				required
			/>

			<input
				type="email"
				name="email"
				placeholder="Email"
				value={form.email}
				onChange={handleChange}
			/>

			<input
				type="text"
				name="telefone"
				placeholder="Telefone"
				value={form.telefone}
				onChange={handleChange}
			/>

			<select name="plano_id" value={form.plano_id} onChange={handleChange} />

			<button type="submit">Salvar</button>
		</form>
	);
}

export default CreateClientForm;
