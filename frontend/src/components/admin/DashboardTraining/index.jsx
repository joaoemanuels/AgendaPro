import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { programasTreino } from "../../../../../backend/database/mock";

import Loading from "../../ui/Loading/index";
import ClientsHeader from "../../ui/ClientsHeader";
import TrainingList from "./TrainingList";
import BaseModal from "../../ui/BaseModal";
import TrainingModal from "./TrainingModal";
import CreateTrainingForm from "./CreateTrainingForm";

import "./dashboard-training.styles.css";

function DashboardTraining() {
	const [treinos, setTreinos] = useState([]);
	const [loading, setLoading] = useState(true);

	const [selectedTreino, setSelectedTreino] = useState(null);

	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	function handleEdit(treino) {
		setSelectedTreino(treino);
		setIsEditModalOpen(true);
	}

	function handleNewTraining() {
		setSelectedTreino(null);
		setIsCreateModalOpen(true);
	}

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
			<ClientsHeader
				titulo="Treinos"
				btn="novo treino"
				onClick={handleNewTraining}
			/>

			<TrainingList treinos={treinos} onEdit={handleEdit} />

			<BaseModal
				isOpen={isCreateModalOpen}
				onClose={() => setIsCreateModalOpen(false)}
				title="Novo Treino"
			>
				<CreateTrainingForm
					treinos={treinos}
					onCreate={(novoTreino) => {
						setTreinos((prev) => [...prev, novoTreino]);
						setIsCreateModalOpen(false);
					}}
				/>
			</BaseModal>

			<TrainingModal
				treino={selectedTreino}
				isOpen={isEditModalOpen}
				onClose={() => {
					setIsEditModalOpen(false);
					setSelectedTreino(null);
				}}
			/>
		</div>
	);
}

export default DashboardTraining;
