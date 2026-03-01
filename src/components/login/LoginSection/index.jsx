import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login-section.styles.css";

function LoginSection() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (isLogin) {
      if (email === "admin@email.com" && senha === "1234") {
        localStorage.setItem("auth", "true");
        navigate("/admin");
      } else {
        alert("Credenciais inválidas");
      }
    } else {
      alert("Cadastro realizado com sucesso!");
      setIsLogin(true);
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
