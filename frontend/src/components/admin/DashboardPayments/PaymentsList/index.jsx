import PaymentsRow from "../PaymentsRow";
import "./payments-list.styles.css";

function PaymentsList({ pagamentos, onEdit, onCharge }) {
	return (
		<div className="table-container">
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
					{pagamentos.map((pagamento) => (
						<PaymentsRow
							key={pagamento.id}
							pagamento={pagamento}
							onEdit={onEdit}
							onCharge={onCharge}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default PaymentsList;
