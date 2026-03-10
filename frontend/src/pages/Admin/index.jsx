import { useState } from "react";

import SidebarAdmin from "../../components/admin/SidebarAdmin";
import DashboardAdmin from "../../components/admin/DashboardAdmin";

import "../Admin/admin.styles.css";

function Admin() {
	const [section, setSection] = useState("dashboard");

	return (
		<div className="admin-wrapper">
			<SidebarAdmin section={section} setSection={setSection} />

			<DashboardAdmin section={section} />
		</div>
	);
}

export default Admin;
