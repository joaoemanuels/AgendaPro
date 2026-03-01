import GraphyAdmin from "../GraphyAdmin/index";
import HeaderAdmin from "../HeaderAdmin/index";
import DashboardOverview from "../DashboardOverview";

import "../DashboardAdmin/dashboard-admin.styles.css";

function DashboardAdmin() {
  return (
    <main className="main-content">
      <HeaderAdmin />

      <DashboardOverview />

      <GraphyAdmin />
    </main>
  );
}

export default DashboardAdmin;
