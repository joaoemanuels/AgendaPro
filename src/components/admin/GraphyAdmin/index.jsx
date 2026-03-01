import "../GraphyAdmin/graphy-admin.styles.css";

function GraphyAdmin() {
  return (
    <section className="bottom-section">
      <div className="box expense">
        <h3>Expense vs Profit</h3>
        <div className="fake-chart large"></div>
      </div>
    </section>
  );
}

export default GraphyAdmin;
