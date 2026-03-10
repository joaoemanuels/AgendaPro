import CardsAdmin from "./CardsAdmin";
import DashboardUsers from "./DashboardUsers";
import DashboardOrder from "./DashboardOrder";
import DashboardHistory from "./DashboardHistory";

import "../DashboardOverview/dashboard-overview.styles.css";

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <CardsAdmin />

      <section className="middle-section">
        <div className="middle-section-left">
          <DashboardUsers />

          <DashboardOrder />
        </div>

        <DashboardHistory />
      </section>
    </div>
  );
}

export default DashboardOverview;
