import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { planosFake, alunosFake } from "../../../../../backend/database/mock";

import ClientsHeader from "../../ui/ClientsHeader/index";
import ClientsList from "./ClientsList";
import Loading from "../../ui/Loading/index";
import ClientsModal from "./ClientsModal";
import BaseModal from "../../ui/BaseModal";
import CreateClientForm from "./CreateClientForm";

import "./dashboard-clients.styles.css";

function DashboardClients() {
	const [alunos, setAlunos] = useState([]);
	const [planos, setPlanos] = useState([]);
	const [loading, setLoading] = useState(true);

	const [selectedClients, setSelectedClients] = useState(null);

	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	function handleEdit(aluno, plano) {
		setSelectedClients({ ...aluno, plano });
		setIsEditModalOpen(true);
	}

	function handleNewClients() {
		setSelectedClients(null);
		setIsCreateModalOpen(true);
	}

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
			<ClientsHeader
				titulo={"Clientes"}
				btn={"novo aluno"}
				onClick={handleNewClients}
			/>

			<ClientsList alunos={alunos} planos={planos} onEdit={handleEdit} />

			<BaseModal
				isOpen={isCreateModalOpen}
				onClose={() => setIsCreateModalOpen(false)}
				title="Novo aluno"
			>
				<CreateClientForm
					planos={planos}
					onCreate={(novoAluno) => {
						setAlunos((prev) => [...prev, novoAluno]);
						setIsCreateModalOpen(false);
					}}
				/>
			</BaseModal>

			<ClientsModal
				aluno={selectedClients}
				isOpen={isEditModalOpen}
				onClose={() => {
					setIsEditModalOpen(false);
					setSelectedClients(null);
				}}
			/>
		</div>
	);
}

export default DashboardClients;
