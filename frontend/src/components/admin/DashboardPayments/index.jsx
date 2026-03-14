import { useEffect, useState } from "react";

import ClientsHeader from "../../ui/ClientsHeader";
import Loading from "../../ui/Loading";

import { pagamentos as pagamentosFake } from "../../../../../backend/database/mock";
import { supabase } from "../../../lib/supabaseClient";

import "./dashboard-payments.styles.css";

function DashboardPayments() {
	const [pagamentos, setPagamentos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchPagamentos() {
			const { data, error } = await supabase.from("pagamentos").select("*");

			if (error || !data || data.length === 0) {
				console.log("Usando pagamentos fake");
				setPagamentos(pagamentosFake);
			} else {
				setPagamentos(data);
			}

			setLoading(false);
		}

		fetchPagamentos();
	}, []);

	if (loading) {
		return <Loading text="Carregando pagamentos..." />;
	}

	return (
		<div className="dashboard-payments">
			<ClientsHeader titulo={"Pagamentos"} btn={"novo pagamento"} />

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
		</div>
	);
}

export default DashboardPayments;
