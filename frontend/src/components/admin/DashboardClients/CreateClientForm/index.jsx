import { useState } from "react";
import "./create-client-form.styles.css";

function CreateClientForm({ onCreate }) {
	const [form, setForm] = useState({
		nome: "",
		email: "",
		telefone: "",
		plano_id: "",
	});

	function handleChange(evento) {
		const { name, value } = evento.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	}

	function handleSubmit(evento) {
		evento.preventDefault();
		const novoAluno = {
			...form,
		};
		onCreate(novoAluno);
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

			<select name="plano_id" value={form.plano_id} onChange={handleChange}>
				<option value="" disabled>
					Selecione o serviço
				</option>
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

export default CreateClientForm;
