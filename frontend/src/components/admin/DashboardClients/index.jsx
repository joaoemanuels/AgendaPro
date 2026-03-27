import { useEffect, useState } from "react";
import { createClient, getClients } from "../../../services/clientsService";

import BaseModal from "../../ui/BaseModal";
import ClientsHeader from "../../ui/ClientsHeader";
import ClientsList from "./ClientsList";
import ClientsModal from "./ClientsModal";
import CreateClientForm from "./CreateClientForm";

import "./dashboard-clients.styles.css";
import Loading from "../../ui/Loading";

function DashboardClients() {
	const [clients, setClients] = useState([]);

	const [selectedClient, setSelectedClient] = useState(null);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	function handleNewClients() {
		setSelectedClient(null);
		setIsCreateModalOpen(true);
	}

	function handleEdit(clients) {
		setSelectedClient({ ...clients });
		setIsEditModalOpen(true);
	}

	function handleDelete(id) {
		setClients((prevState) => {
			return prevState.filter((a) => a.id !== id);
		});
		setIsEditModalOpen(false);
		setSelectedClient(null);
	}

	function createClients(client) {
		createClient(client);
		setIsCreateModalOpen(false);
		setClients((prev) => [...prev, client]);
	}

	function handleUpdate(updateClient) {
		setClients((prev) =>
			prev.map((item) => (item.id === updateClient.id ? updateClient : item)),
		);
		setIsEditModalOpen(false);
		setSelectedClient(null);
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

			<ClientsList clients={clients} onEdit={handleEdit} />

			<BaseModal
				isOpen={isCreateModalOpen}
				onClose={() => setIsCreateModalOpen(false)}
				title="Novo Aluno"
			>
				<CreateClientForm clients={clients} onCreate={createClients} />
			</BaseModal>

			<ClientsModal
				aluno={selectedClient}
				isOpen={isEditModalOpen}
				onUpdate={handleUpdate}
				onDelete={handleDelete}
				onClose={() => {
					setIsEditModalOpen(false);
					setSelectedClient(null);
				}}
			/>
		</>
	);
}

export default DashboardClients;
