import "./training-card.styles.css";

function TrainingCard({ treinos }) {
	return (
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
	);
}

export default TrainingCard;
