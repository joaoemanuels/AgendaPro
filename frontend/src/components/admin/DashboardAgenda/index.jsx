import { useEffect, useState } from "react";
import { agendamentos as agendamentosFake } from "../../../../../backend/database/mock";
import { supabase } from "../../../lib/supabaseClient";

import Loading from "../../ui/Loading";
import ClientsHeader from "../../ui/ClientsHeader";

import "./dashboard-agenda.styles.css";

function DashboardAgenda() {
	const [agendamentos, setAgendamentos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchAgendamentos() {
			const { data, error } = await supabase.from("agendamentos").select("*");

			if (error || !data || data.length === 0) {
				console.log("usando pagamentos fake");
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
			<ClientsHeader titulo={"Agenda"} btn={"novo evento"} />

			<ul>
				{agendamentos.map((a) => (
					<li key={a.id} className="agenda-item">
						<div className="agenda-hora">
							{a.inicio} - {a.fim}
						</div>

						<div className="agenda-info">
							<span className="agenda-nome">Aluno: {a.nomeAluno}</span>

							<span className="agenda-servico">Serviço: {a.servico}</span>

							<span className="agenda-personal">
								Personal: {a.nomePersonal}
							</span>

							<span className="agenda-data">Data: {a.data}</span>

							<span className={`agenda-status ${a.status}`}>
								Status: {a.status}
							</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default DashboardAgenda;
