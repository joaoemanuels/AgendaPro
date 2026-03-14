import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { planosFake, alunosFake } from "../../../../../backend/database/mock";

import ClientsHeader from "./ClientsHeader";
import ClientsList from "./ClientsList";
import Loading from "../../ui/Loading/index";

import "./dashboard-clients.styles.css";

function DashboardClients() {
	const [alunos, setAlunos] = useState([]);
	const [planos, setPlanos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const personalIdDoAdmin = 1;

			const { data: alunosData, error: alunosError } = await supabase
				.from("alunos")
				.select("*")
				.eq("personal_id", personalIdDoAdmin);

			if (alunosError || !alunosData || alunosData.length === 0) {
				console.log("Usando dados fake de alunos");
				setAlunos(alunosFake);
			} else {
				setAlunos(alunosData);
			}

			const { data: planosData, error: planosError } = await supabase
				.from("planos")
				.select("*");

			if (planosError || !planosData || planosData.length === 0) {
				console.log("Usando dados fake de planos");
				setPlanos(planosFake);
			} else {
				setPlanos(planosData);
			}

			setLoading(false);
		}

		fetchData();
	}, []);

	if (loading) {
		return <Loading text="Carregando clientes..." />;
	}

	return (
		<div className="dashboard-clients">
			<ClientsHeader />

			<ClientsList alunos={alunos} planos={planos} />
		</div>
	);
}

export default DashboardClients;
