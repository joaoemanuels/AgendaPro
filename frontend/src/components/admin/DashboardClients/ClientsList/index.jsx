import ClientsCard from "../ClientsCard";
import "./client-list.styles.css";

function ClientsList({ alunos, planos, onEdit }) {
	return (
		<div className="clients-container">
			{alunos.map((aluno) => {
				const plano = planos.find((p) => p.id === aluno.plano_id);

				return (
					<ClientsCard
						key={aluno.id}
						aluno={aluno}
						plano={plano}
						onEdit={onEdit}
					/>
				);
			})}
		</div>
	);
}

export default ClientsList;
