import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { programasTreino } from "../../../../../backend/database/mock";

import Loading from "../../ui/Loading/index";

import "./dashboard-training.styles.css";

function DashboardTraining() {
	const [treinos, setTreinos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchTreinos() {
			const { data, error } = await supabase.from("treinos").select("*");

			if (error || !data || data.length === 0) {
				console.log("Usando dados fake de treinos");
				setTreinos(programasTreino);
			} else {
				setTreinos(data);
			}

			setLoading(false);
		}

		fetchTreinos();
	}, []);

	if (loading) {
		return <Loading text="Carregando treinos..." />;
	}

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
