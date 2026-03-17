import { useEffect, useState } from "react";
import { pagamentos as pagamentosFake } from "../../../../../backend/database/mock";
import { supabase } from "../../../lib/supabaseClient";

import ClientsHeader from "../../ui/ClientsHeader";
import Loading from "../../ui/Loading";
import PaymentsList from "./PaymentsList";
import PaymentsModal from "./PaymentsModal";

import "./dashboard-payments.styles.css";

function DashboardPayments() {
	const [pagamentos, setPagamentos] = useState([]);
	const [loading, setLoading] = useState(true);

	const [selectedPayment, setSelectedPayment] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	function handleEdit(pagamento) {
		setSelectedPayment(pagamento);
		setIsModalOpen(true);
	}

	function handleCharge(pagamento) {
		alert("Cobrar", pagamento);
	}

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

			<PaymentsList
				pagamentos={pagamentos}
				onEdit={handleEdit}
				onCharge={handleCharge}
			/>

			<PaymentsModal
				pagamento={selectedPayment}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</div>
	);
}

export default DashboardPayments;
