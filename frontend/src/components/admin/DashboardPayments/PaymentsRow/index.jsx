import "./payments-row.styles.css";

function PaymentsRow({ pagamento, onCharge, onEdit }) {
	return (
		<tr>
			<td>{pagamento.nome}</td>
			<td>{pagamento.plano}</td>
			<td>{pagamento.valor}</td>
			<td>{pagamento.data}</td>

			<td>
				<span className={`status ${pagamento.status.toLowerCase()}`}>
					{pagamento.status}
				</span>
			</td>

			<td className="acoes">
				<button className="btn cobrar" onClick={() => onCharge(pagamento)}>
					Cobrar
				</button>
				<button className="btn editar" onClick={() => onEdit(pagamento)}>
					Editar
				</button>
			</td>
		</tr>
	);
}

export default PaymentsRow;
