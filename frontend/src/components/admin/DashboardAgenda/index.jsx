import { useEffect, useState } from "react";
import { agendamentos as agendamentosFake } from "../../../../../backend/database/mock";
import { supabase } from "../../../lib/supabaseClient";

import Loading from "../../ui/Loading";
import ClientsHeader from "../../ui/ClientsHeader";
import AgendaList from "./AgendaList";
import AgendaModal from "./AgendaModal";
import BaseModal from "../../ui/BaseModal";

import "./dashboard-agenda.styles.css";

function DashboardAgenda() {
	const [agendamentos, setAgendamentos] = useState([]);
	const [loading, setLoading] = useState(true);

	const [selectedAgenda, setSelectedAgenda] = useState(null);

	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	function handleEdit(agendamento) {
		setSelectedAgenda(agendamento);
		setIsEditModalOpen(true);
	}

	function handleNewAgenda() {
		setSelectedAgenda(null);
		setIsCreateModalOpen(true);
	}

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
			<ClientsHeader
				titulo="Agenda"
				btn="novo evento"
				onClick={handleNewAgenda}
			/>

			<AgendaList agendamentos={agendamentos} onEdit={handleEdit} />

			<BaseModal
				isOpen={isCreateModalOpen}
				onClose={() => setIsCreateModalOpen(false)}
				title="Novo agendamento"
			>
				<p>teste</p>
			</BaseModal>

			<AgendaModal
				agenda={selectedAgenda}
				isOpen={isEditModalOpen}
				onClose={() => {
					setIsEditModalOpen(false);
					setSelectedAgenda(null);
				}}
			/>
		</div>
	);
}

export default DashboardAgenda;
