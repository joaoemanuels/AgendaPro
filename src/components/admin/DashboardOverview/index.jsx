import CardsAdmin from "../CardsAdmin";
import DashboardUsers from "../DashboardUsers";
import DashboardOrder from "../DashboardOrder";
import DashboardHistory from "../DashboardHistory";

import "../DashboardOverview/dashboard-overview.styles.css";

function DashboardOverview() {
  return (
    <>
      <CardsAdmin />

      <section className="middle-section">
        <div className="middle-section-left">
          <DashboardUsers />

          <DashboardOrder />
        </div>

        <DashboardHistory />
      </section>
    </>
  );
}

export default DashboardOverview;
