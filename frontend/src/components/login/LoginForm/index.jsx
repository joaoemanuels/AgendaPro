// LoginForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/authService";

import "./login-form.styles.css";

function LoginForm({ toggle }) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		setError("");
		setLoading(true);

		if (!email || !senha) {
			setError("Preencha todos os campos.");
			setLoading(false);
			return;
		}

		try {
			const data = await login(email, senha);

			localStorage.setItem("token", data.token);
			localStorage.setItem("auth", "true");
			localStorage.setItem("user", JSON.stringify(data.user));

			navigate("/admin");
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<h2>Dados login teste</h2>
			<ul className="login-teste">
				<li>Email: joao.personal@gmail.com</li>
				<li>senha: 123456</li>
			</ul>
			<h2>Login Admin</h2>

			{error && <p className="login-error">{error}</p>}

			<form onSubmit={handleSubmit}>
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

				<button type="submit" disabled={loading}>
					{loading ? "Carregando..." : "Entrar"}
				</button>
			</form>

			<p onClick={toggle} className="toggle-text">
				Não tem conta? Cadastre-se
			</p>
		</>
	);
}

export default LoginForm;
