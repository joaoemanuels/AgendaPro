import "./training-card.styles.css";

function TrainingCard({ treino, onEdit }) {
	return (
		<>
			<div key={treino.id} className={`training-card card-${treino.categoria}`}>
				<h3>{treino.nome}</h3>
				<p>{treino.descricao}</p>
				<p>Duração: {treino.duracao} min</p>
				<div className="training-footer">
					<button type="button" onClick={() => onEdit(treino)}>
						Editar
					</button>
				</div>
			</div>
		</>
	);
}

export default TrainingCard;
