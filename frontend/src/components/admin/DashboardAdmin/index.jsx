import HeaderAdmin from "../HeaderAdmin";
import DashboardOverview from "../DashboardOverview";
import DashboardClients from "../DashboardClients";
import DashboardAlunos from "../DashboardAlunos";
import DashboardTraining from "../DashboardTraining";
import DashboardAgenda from "../DashboardAgenda";
import DashboardPayments from "../DashboardPayments";
import DashboardReports from "../DashboardReports";
import DashboardConfig from "../DashboardConfig";

import "./dashboard-admin.styles.css";

function DashboardAdmin({ section }) {
	function renderContent() {
		switch (section) {
			case "dashboard":
				return <DashboardOverview />;

			case "clientes":
				return <DashboardClients />;

			case "alunos":
				return <DashboardAlunos />;

			case "treinos":
				return <DashboardTraining />;

			case "agenda":
				return <DashboardAgenda />;

			case "pagamentos":
				return <DashboardPayments />;

			case "relatorios":
				return <DashboardReports />;

			case "config":
				return <DashboardConfig />;

			default:
				return <DashboardOverview />;
		}
	}

	return <main className="main-content">{renderContent()}</main>;
}

export default DashboardAdmin;
