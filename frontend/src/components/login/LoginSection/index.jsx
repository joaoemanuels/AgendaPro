import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login-section.styles.css";

function LoginSection() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    const url = isLogin
      ? "http://localhost:8000/auth/login"
      : "http://localhost:8000/auth/register";

    try {

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        setIsLogin(false);
        throw new Error(data.detail || "Erro ao processar a solicitação");
      }

      setIsLogin(true);

      if (isLogin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("auth", "true");
        console.log("Login realizado com sucesso!");
        navigate("/admin");
      } else {
        console.log("Cadastro realizado com sucesso!");
        setIsLogin(true);
      }

    } catch (error) {
      console.error(error.message);
      return;
    }

  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? "Login Admin" : "Cadastro Admin"}</h2>

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

          <button type="submit">{isLogin ? "Entrar" : "Cadastrar"}</button>
        </form>

        <p onClick={() => setIsLogin(!isLogin)} className="toggle-text">
          {isLogin ? "Não tem conta? Cadastre-se" : "Já tem conta? Faça login"}
        </p>
      </div>
    </div>
  );
}

export default LoginSection;
