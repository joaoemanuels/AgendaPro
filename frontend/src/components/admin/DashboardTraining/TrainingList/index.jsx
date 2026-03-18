import TrainingCard from "../TrainingCard";

import "./training-list.styles.css";

function TrainingList({ treinos, onEdit }) {
	return (
		<div className="training-container">
			<div className="training-cards">
				{treinos.map((treino) => (
					<TrainingCard key={treino.id} treino={treino} onEdit={onEdit} />
				))}
			</div>
		</div>
	);
}

export default TrainingList;
