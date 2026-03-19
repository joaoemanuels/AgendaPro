import { useState } from "react";

import "./create-payments-form.styles.css";

function CreatePaymentsForm({ onCreate }) {
	const [form, setForm] = useState({
		nome: "",
		plano: "",
		valor: "",
		status: "pendente",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();

		const novoPagamento = {
			id: Date.now(),
			...form,
			valor: Number(form.valor),
			data: new Date().toLocaleDateString(),
		};

		onCreate(novoPagamento);
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

			<select name="plano" value={form.plano} onChange={handleChange} required>
				<option value="">Selecione o plano</option>
				<option value="Mensal">Mensal</option>
				<option value="Trimestral">Trimestral</option>
				<option value="Anual">Anual</option>
			</select>

			<input
				type="number"
				name="valor"
				placeholder="Valor"
				value={form.valor}
				onChange={handleChange}
				required
			/>

			<select name="status" value={form.status} onChange={handleChange}>
				<option value="pendente">Pendente</option>
				<option value="pago">Pago</option>
			</select>

			<button type="submit">Salvar</button>
		</form>
	);
}

export default CreatePaymentsForm;
