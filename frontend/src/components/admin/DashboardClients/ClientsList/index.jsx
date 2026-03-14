import ClientsCard from "../ClientsCard";
import "./client-list.styles.css";

function ClientsList({ alunos, planos }) {
	return (
		<div className="clients-container">
			{alunos.map((aluno) => {
				const planoAluno = planos.find((p) => p.id === aluno.plano_id);
				return <ClientsCard key={aluno.id} aluno={aluno} plano={planoAluno} />;
			})}
		</div>
	);
}

export default ClientsList;
