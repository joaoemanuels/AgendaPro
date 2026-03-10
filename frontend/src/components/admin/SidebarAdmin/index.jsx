import { useNavigate } from "react-router-dom";
import { alunos } from "../../../../../backend/data/database";

import "./sidebar-admin.styles.css";

function SidebarAdmin({ section, setSection }) {
	const navigate = useNavigate();

	function handleLogout() {
		localStorage.removeItem("auth");
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		navigate("/login");
	}

	return (
		<aside className="sidebar">
			<div className="profile-section">
				<div className="profile-img"></div>
				<h3>{alunos[0]?.nome}</h3>
				<span>{alunos[0]?.email}</span>
			</div>

			<nav className="sidebar-menu">
				<ul>
					<li
						className={section === "dashboard" ? "active" : ""}
						onClick={() => setSection("dashboard")}
					>
						Dashboard
					</li>
					<li
						className={section === "clientes" ? "active" : ""}
						onClick={() => setSection("clientes")}
					>
						Clientes
					</li>
					<li
						className={section === "treinos" ? "active" : ""}
						onClick={() => setSection("treinos")}
					>
						Treinos
					</li>
					<li
						className={section === "agenda" ? "active" : ""}
						onClick={() => setSection("agenda")}
					>
						Agenda
					</li>
					<li
						className={section === "pagamentos" ? "active" : ""}
						onClick={() => setSection("pagamentos")}
					>
						Pagamentos
					</li>
					<li
						className={section === "relatorios" ? "active" : ""}
						onClick={() => setSection("relatorios")}
					>
						Relatórios
					</li>
					<li
						className={section === "config" ? "active" : ""}
						onClick={() => setSection("config")}
					>
						Configurações
					</li>
				</ul>
			</nav>

			<button className="logout-btn" onClick={handleLogout}>
				Logout
			</button>
		</aside>
	);
}

export default SidebarAdmin;
