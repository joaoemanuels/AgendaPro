import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

import { agendamentos as agendamentosFake } from "../../../../../backend/database/mock";

import Loading from "../../ui/Loading";
import ClientsHeader from "../../ui/ClientsHeader";
import AgendaList from "./AgendaList";

import "./dashboard-agenda.styles.css";

function DashboardAgenda() {
	const [agendamentos, setAgendamentos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchAgendamentos() {
			const { data, error } = await supabase.from("agendamentos").select("*");

			if (error || !data || data.length === 0) {
				setAgendamentos(agendamentosFake);
			} else {
				setAgendamentos(data);
			}

			setLoading(false);
		}

		fetchAgendamentos();
	}, []);

	if (loading) {
		return <Loading text="Carregando agendamentos..." />;
	}

	return (
		<div className="dashboard-agenda">
			<ClientsHeader titulo="Agenda" btn="novo evento" />

			<AgendaList agendamentos={agendamentos} />
		</div>
	);
}

export default DashboardAgenda;
