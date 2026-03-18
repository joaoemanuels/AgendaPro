import { useNavigate } from "react-router-dom";
import { logout, getUser } from "../../../services/authService";

import "./sidebar-admin.styles.css";

function SidebarAdmin({ section, setSection, open, setOpen }) {
	const navigate = useNavigate();

	const user = getUser();

	function handleLogout() {
		logout();
		navigate("/login");
	}

	return (
		<aside className={`sidebar ${open ? "open" : ""}`}>
			<div className="profile-section">
				<div className="profile-img"></div>

				<h3>{user?.nome || "Usuário"}</h3>
				<span>{user?.email || "email@email.com"}</span>
			</div>

			<nav className="sidebar-menu">
				<ul>
					<li
						className={section === "dashboard" ? "active" : ""}
						onClick={() => {
							setSection("dashboard");
							setOpen(false);
						}}
					>
						Dashboard
					</li>

					<li
						className={section === "clientes" ? "active" : ""}
						onClick={() => {
							setSection("clientes");
							setOpen(false);
						}}
					>
						Clientes
					</li>

					<li
						className={section === "treinos" ? "active" : ""}
						onClick={() => {
							setSection("treinos");
							setOpen(false);
						}}
					>
						Treinos
					</li>

					<li
						className={section === "agenda" ? "active" : ""}
						onClick={() => {
							setSection("agenda");
							setOpen(false);
						}}
					>
						Agenda
					</li>

					<li
						className={section === "pagamentos" ? "active" : ""}
						onClick={() => {
							setSection("pagamentos");
							setOpen(false);
						}}
					>
						Pagamentos
					</li>

					<li
						className={section === "relatorios" ? "active" : ""}
						onClick={() => {
							setSection("relatorios");
							setOpen(false);
						}}
					>
						Relatórios
					</li>

					<li
						className={section === "config" ? "active" : ""}
						onClick={() => {
							setSection("config");
							setOpen(false);
						}}
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
