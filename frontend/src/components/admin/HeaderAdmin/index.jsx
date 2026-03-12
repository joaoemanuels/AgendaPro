import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

import "./header-admin.styles.css";

function HeaderAdmin() {

	const [admin, setTreinos] = useState([]);

	useEffect(() => {
		async function fetchTreinos() {
			const { data, error } = await supabase
				.from("admin")
				.select("*");

			if (error) {
				console.error("Erro ao buscar treinos:", error);
			} else {
				setTreinos(data);
			}
		}

		fetchTreinos();
	}, []);

	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => setDarkMode(!darkMode);

	return (
		<header className="topbar">
			<h2>Bem vindo {admin?.nome} !</h2>

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
