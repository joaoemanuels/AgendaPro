import ClientsCard from "../ClientsCard";

import "./clients-list.styles.css";

function ClientsList({ onEdit, clients, onDelete }) {
	return (
		<div className="clients-container">
			{clients.map((client) => {
				return (
					<ClientsCard
						key={client.id}
						client={client}
						onEdit={onEdit}
						onDelete={onDelete}
					/>
				);
			})}
		</div>
	);
}

export default ClientsList;
