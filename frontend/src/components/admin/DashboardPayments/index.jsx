import "./dashboard-payments.styles.css";

function DashboardPayments() {
	const pagamentos = [
		{
			id: 1,
			nome: "João",
			plano: "Plano Premium",
			valor: "R$150,00",
			data: "12/03/2026",
			status: "Pago",
		},
		{
			id: 2,
			nome: "Maria",
			plano: "Plano Básico",
			valor: "R$120,00",
			data: "13/03/2026",
			status: "Pendente",
		},
		{
			id: 3,
			nome: "Carlos",
			plano: "Plano Funcional",
			valor: "R$200,00",
			data: "10/03/2026",
			status: "Pago",
		},
	];

	return (
		<div className="dashboard-payments">
			<h1>Pagamentos</h1>

			<table>
				<thead>
					<tr>
						<th>Cliente</th>
						<th>Plano</th>
						<th>Valor</th>
						<th>Data pagamento</th>
						<th>Status</th>
						<th>Ações</th>
					</tr>
				</thead>

				<tbody>
					{pagamentos.map((p) => (
						<tr key={p.id}>
							<td>{p.nome}</td>
							<td>{p.plano}</td>
							<td>{p.valor}</td>
							<td>{p.data}</td>

							<td>
								<span className={`status ${p.status.toLowerCase()}`}>
									{p.status}
								</span>
							</td>

							<td className="acoes">
								<button className="btn cobrar">Cobrar</button>
								<button className="btn editar">Editar</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default DashboardPayments;
