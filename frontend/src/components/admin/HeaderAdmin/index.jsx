import NotificationButton from "../../ui/NotificationButton";
import { notifications } from "../../../../../backend/database/mock";
import "./header-admin.styles.css";

function HeaderAdmin({ setSidebarOpen }) {
	const user = JSON.parse(localStorage.getItem("user"));

	return (
		<header className="topbar">
			<div className="topbar-content">
				<h2>
					Bem vindo <span>{user?.nome || "Usuário"} !</span>
				</h2>

				<NotificationButton notifications={notifications} />

				<button
					className="hamburger"
					onClick={() => setSidebarOpen((prev) => !prev)}
				>
					☰
				</button>
			</div>
		</header>
	);
}

export default HeaderAdmin;
