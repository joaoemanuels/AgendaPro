import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";


import "./dashboard-training.styles.css";

function DashboardTraining() {
	const [treinos, setTreinos] = useState([]);

	useEffect(() => {
		async function fetchTreinos() {
			const { data, error } = await supabase.from("treinos").select("*");

			if (error) {
				console.error("Erro ao buscar treinos:", error);
			} else {
				setTreinos(data);
			}
		}

		fetchTreinos();
	}, []);
	return (
		<div className="dashboard-training">
			<h1>Treinos</h1>

			<div className="training-cards">
				{treinos.map((treino) => (
					<div
						key={treino.id}
						className={`training-card card-${treino.categoria}`}
					>
						<h3>{treino.nome}</h3>
						<p>{treino.descricao}</p>
						<p>Duração: {treino.duracao} min</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default DashboardTraining;
