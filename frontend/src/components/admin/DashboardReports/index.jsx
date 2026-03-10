import "./dashboard-reports.styles.css";

function DashboardReports() {
  return (
    <div className="dashboard-reports">
      <h1>Relatórios</h1>
      <div className="reports-cards">
        <div className="card">
          <h3>Relatório de Clientes</h3>
          <p>Total de clientes ativos: 120</p>
        </div>
        <div className="card">
          <h3>Relatório de Treinos</h3>
          <p>Total de treinos realizados: 350</p>
        </div>
        <div className="card">
          <h3>Relatório Financeiro</h3>
          <p>Receita total: R$ 15.200,00</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardReports;