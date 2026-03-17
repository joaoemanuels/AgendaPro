import AgendaCard from "../AgendaCard";

import "./agenda-list.styles.css";

function AgendaList({ agendamentos, onEdit }) {
	return (
		<div className="agenda-container">
			<ul>
				{agendamentos.map((agenda) => (
					<AgendaCard key={agenda.id} agenda={agenda} onEdit={onEdit} />
				))}
			</ul>
		</div>
	);
}

export default AgendaList;
