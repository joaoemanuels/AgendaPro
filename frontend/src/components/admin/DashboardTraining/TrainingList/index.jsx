import TrainingCard from "../TrainingCard";
import "./training-list.styles.css";

function TrainingList({ treinos }) {
	return (
		<div className="training-container">
			<TrainingCard treinos={treinos} />;
		</div>
	);
}

export default TrainingList;
