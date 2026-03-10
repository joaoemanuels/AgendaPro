import "./dashboard-payments.styles.css";

function DashboardPayments() {
  const pagamentos = [
    { nome: "João", valor: "R$ 150,00", status: "Pago" },
    { nome: "Maria", valor: "R$ 120,00", status: "Pendente" },
    { nome: "Carlos", valor: "R$ 200,00", status: "Pago" },
  ];

  return (
    <div className="dashboard-payments">
      <h1>Pagamentos</h1>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pagamentos.map((p, i) => (
            <tr key={i}>
              <td>{p.nome}</td>
              <td>{p.valor}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardPayments;