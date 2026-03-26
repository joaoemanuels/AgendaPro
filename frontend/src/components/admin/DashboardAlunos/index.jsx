import BaseModal from "../../ui/BaseModal";
import ClientsHeader from "../../ui/ClientsHeader";
import ClientsList from "./ClientsList";
import ClientsModal from "./ClientsModal";

import "./dashboard-alunos.styles.css";

function DashboardAlunos() {
	return (
		<>
			<ClientsHeader titulo={"Clientes"} btn={"novo aluno"} />

			<ClientsList />

			<BaseModal></BaseModal>

			<div>
				<ClientsModal />
			</div>
		</>
	);
}

export default DashboardAlunos;
