import { useEffect, useState } from "react";
import { createClient, getClients } from "../../../services/clientsService";

import BaseModal from "../../ui/BaseModal";
import ClientsHeader from "../../ui/ClientsHeader";
import ClientsList from "./ClientsList";
import ClientsModal from "./ClientsModal";
import CreateClientForm from "./CreateClientForm";

import "./dashboard-clients.styles.css";

function DashboardClients() {
	const [selectedClients, setSelectedClients] = useState(null);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [clients, setClients] = useState([]);

	function handleNewClients() {
		setSelectedClients(null);
		setIsCreateModalOpen(true);
	}

	function handleEdit(clients) {
		setSelectedClients({ ...clients });
		setIsEditModalOpen(true);
	}

	function createClients(client) {
		createClient(client);
		setIsCreateModalOpen(false);
		setClients((prev) => [...prev, client]);
	}

	function handleDelete() {
		console.log("teste");
	}

	useEffect(() => {
		getClients().then((dados) => {
			setClients(dados);
		});
	}, []);

	return (
		<>
			<ClientsHeader
				titulo={"Clientes"}
				btn={"novo aluno"}
				onClick={handleNewClients}
			/>

			<ClientsList
				onEdit={handleEdit}
				clients={clients}
				onDelete={handleDelete}
			/>

			<BaseModal
				isOpen={isCreateModalOpen}
				onClose={() => setIsCreateModalOpen(false)}
				title="Novo Aluno"
			>
				<CreateClientForm onSubmit={createClients} />
			</BaseModal>

			<div>
				<ClientsModal
					aluno={selectedClients}
					isOpen={isEditModalOpen}
					onClose={() => {
						setIsEditModalOpen(false);
						setSelectedClients(null);
					}}
					onDelete={handleDelete}
				/>
			</div>
		</>
	);
}

export default DashboardClients;
