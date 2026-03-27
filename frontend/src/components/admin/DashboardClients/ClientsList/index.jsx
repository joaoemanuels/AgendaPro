import ClientsCard from "../ClientsCard";

import "./clients-list.styles.css";

function ClientsList({ onEdit, clients }) {
	return (
		<div className="clients-container">
			{clients.map((client) => {
				return (
					<ClientsCard
						key={client.id}
						client={client}
						onEdit={onEdit}
					/>
				);
			})}
		</div>
	);
}

export default ClientsList;
