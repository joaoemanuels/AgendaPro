import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { programasTreino } from "../../../../../backend/database/mock";

import Loading from "../../ui/Loading/index";
import ClientsHeader from "../../ui/ClientsHeader";
import TrainingList from "./TrainingList";

import "./dashboard-training.styles.css";

function DashboardTraining() {
	const [treinos, setTreinos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchTreinos() {
			const { data, error } = await supabase.from("treinos").select("*");

			if (error || !data || data.length === 0) {
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
			<ClientsHeader titulo={"Treinos"} btn={"novo treino"} />

			<TrainingList treinos={treinos} />
		</div>
	);
}

export default DashboardTraining;
