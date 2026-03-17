import "./agenda-card.styles.css";

function AgendaCard({ agenda, onEdit }) {
	return (
		<>
			<li className="agenda-item">
				<div className="agenda-hora">
					{agenda.inicio} - {agenda.fim}
				</div>

				<div className="agenda-info">
					<span className="agenda-nome">Aluno: {agenda.nomeAluno}</span>

					<span className="agenda-servico">Serviço: {agenda.servico}</span>

					<span className="agenda-personal">
						Personal: {agenda.nomePersonal}
					</span>

					<span className="agenda-data">Data: {agenda.data}</span>

					<span className={`agenda-status ${agenda.status}`}>
						{agenda.status}
					</span>
				</div>

				<div className="agenda-footer">
					<button type="button" onClick={() => onEdit(agenda)}>
						Editar
					</button>
				</div>
			</li>
		</>
	);
}

export default AgendaCard;
