import { useEffect, useState } from "react";
import { agendamentos as agendamentosFake } from "../../../../../backend/database/mock";
import { supabase } from "../../../lib/supabaseClient";

import Loading from "../../ui/Loading";
import ClientsHeader from "../../ui/ClientsHeader";
import AgendaList from "./AgendaList";
import AgendaModal from "./AgendaModal";
import BaseModal from "../../ui/BaseModal";
import CreateAgendaForm from "./CreateAgendaForm";

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

	function handleDelete(id) {
		setAgendamentos((prevState) => {
			return prevState.filter((a) => a.id !== id);
		});

		setIsEditModalOpen(false);
		setSelectedAgenda(null);
	}

	function handleUpdate(updatedAgenda) {
		setAgendamentos((prev) =>
			prev.map((item) => (item.id === updatedAgenda.id ? updatedAgenda : item)),
		);

		setIsEditModalOpen(false);
		setSelectedAgenda(null);
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
				<CreateAgendaForm
					agendamentos={agendamentos}
					onCreate={(novoAgendamento) => {
						setAgendamentos((prev) => [...prev, novoAgendamento]);
						setIsCreateModalOpen(false);
					}}
				/>
			</BaseModal>

			<AgendaModal
				agenda={selectedAgenda}
				isOpen={isEditModalOpen}
				onUpdate={handleUpdate}
				onDelete={handleDelete}
				onClose={() => {
					setIsEditModalOpen(false);
					setSelectedAgenda(null);
				}}
			/>
		</div>
	);
}

export default DashboardAgenda;
