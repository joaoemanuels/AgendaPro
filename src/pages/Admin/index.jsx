import SidebarAdmin from "../../components/admin/SidebarAdmin";
import DashboardAdmin from "../../components/admin/DashboardAdmin";

import "../Admin/admin.styles.css";

function Admin() {
  return (
    <div className="admin-wrapper">
      <SidebarAdmin />

      <DashboardAdmin />
    </div>
  );
}

export default Admin;
