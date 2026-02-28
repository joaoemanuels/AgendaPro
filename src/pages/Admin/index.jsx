import { useNavigate } from "react-router-dom";

import "../Admin/admin.styles.css";

function Admin() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("auth");
    navigate("/login");
  }

  return (
    <>
      <button onClick={handleLogout}>Sair</button>
      <h1>Painel Admin</h1>
    </>
  );
}

export default Admin;
