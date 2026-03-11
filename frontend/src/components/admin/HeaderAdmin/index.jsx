import { useState } from "react";
import { alunos } from "../../../../../backend/database/database";

import "./header-admin.styles.css";

function HeaderAdmin() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => setDarkMode(!darkMode);

	return (
		<header className="topbar">
			<h2>Bem vindo {alunos[0]?.nome} !</h2>

			<div className="header-right">
				<div className="search-bar">
					<input type="text" placeholder="Search" />
				</div>

				<label className="switch">
					<input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
					<span className="slider round"></span>
				</label>

				<button className="notification-btn">X</button>
			</div>
		</header>
	);
}

export default HeaderAdmin;
