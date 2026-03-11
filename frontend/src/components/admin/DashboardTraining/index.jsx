import "./dashboard-training.styles.css";
import { treinos } from "../../../../../backend/database/database";

function DashboardTraining() {
	return (
		<div className="dashboard-training">
			<h1>Treinos</h1>

			<div className="training-cards">
				{treinos.map((treino) => (
					<div
						key={treino.id}
						className={`training-card card-${treino.categoria}`}
					>
						<h3>{treino.nome}</h3>
						<p>{treino.descricao}</p>
						<p>Duração: {treino.duracao} min</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default DashboardTraining;
