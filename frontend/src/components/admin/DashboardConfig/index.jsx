import "./dashboard-config.styles.css";

function DashboardConfig() {
  return (
    <div className="dashboard-config">
      <h1>Configurações</h1>
      <p>Aqui você pode alterar o perfil, preferências do painel, notificações e mais.</p>
      <div className="config-placeholder">
        <div className="card">Perfil</div>
        <div className="card">Preferências</div>
        <div className="card">Notificações</div>
      </div>
    </div>
  );
}

export default DashboardConfig;