import AgendaCard from "../AgendaCard";

import "./agenda-list.styles.css";

function AgendaList({ agendamentos }) {
	return (
		<div className="agenda-container">
			<ul>
				{agendamentos.map((agenda) => (
					<AgendaCard key={agenda.id} agenda={agenda} />
				))}
			</ul>
		</div>
	);
}

export default AgendaList;
