import { useState } from "react";
import { register } from "../../../services/authService";

function RegisterForm({ toggle }) {
	const [nome, setNome] = useState("");
	const [codigo, setCodigo] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [reSenha, setreSenha] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setError("");
		setLoading(true);

		if (!email || !senha || !nome) {
			setError("Preencha todos os campos.");
			setLoading(false);
			return;
		}

		if (senha !== reSenha) {
			setError("As senhas divergem");
			setLoading(false);
			return;
		}

		if (codigo !== "CODIGO123") {
			setError("Código de autorização inválido");
			setLoading(false);
			return;
		}

		try {
			await register(email, senha);

			alert("Conta criada com sucesso!");
			toggle();
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<h2>Cadastro Admin</h2>
			{error && <p className="login-error">{error}</p>}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Nome completo"
					value={nome}
					onChange={(e) => setNome(e.target.value)}
				/>

				<input
					type="text"
					placeholder="Código de autorização"
					value={codigo}
					onChange={(e) => setCodigo(e.target.value)}
				/>

				<input
					type="email"
					placeholder="E-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type="password"
					placeholder="Senha"
					value={senha}
					onChange={(e) => setSenha(e.target.value)}
				/>

				<input
					type="password"
					placeholder="Confirme a senha"
					value={reSenha}
					onChange={(e) => setreSenha(e.target.value)}
				/>

				<button type="submit" disabled={loading}>
					{loading ? "Carregando..." : "Cadastrar"}
				</button>
			</form>

			<p onClick={toggle} className="toggle-text">
				Já tem conta? Faça login
			</p>
		</>
	);
}

export default RegisterForm;