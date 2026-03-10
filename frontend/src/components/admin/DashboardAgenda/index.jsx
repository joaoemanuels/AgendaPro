import "./dashboard-agenda.styles.css";

function DashboardAgenda() {
  const agendamentos = [
    { nome: "João", hora: "08:00", servico: "Treino Personal" },
    { nome: "Maria", hora: "10:00", servico: "Aula em grupo" },
    { nome: "Carlos", hora: "14:00", servico: "Treino Funcional" },
  ];

  return (
    <div className="dashboard-agenda">
      <h1>Agenda do Dia</h1>
      <ul>
        {agendamentos.map((a, i) => (
          <li key={i}>
            <strong>{a.hora}</strong> - {a.nome} ({a.servico})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardAgenda;