import { useEffect, useState } from "react";
import { pagamentos as pagamentosFake } from "../../../../../backend/database/mock";
import { supabase } from "../../../lib/supabaseClient";

import ClientsHeader from "../../ui/ClientsHeader";
import Loading from "../../ui/Loading";
import PaymentsList from "./PaymentsList";
import PaymentsModal from "./PaymentsModal";
import BaseModal from "../../ui/BaseModal";

import "./dashboard-payments.styles.css";

function DashboardPayments() {
	const [pagamentos, setPagamentos] = useState([]);
	const [loading, setLoading] = useState(true);

	const [selectedPayment, setSelectedPayment] = useState(null);

	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	function handleEdit(pagamento) {
		setSelectedPayment(pagamento);
		setIsEditModalOpen(true);
	}

	function handleNewPayment() {
		setSelectedPayment(null);
		setIsCreateModalOpen(true);
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
			<ClientsHeader
				titulo="Pagamentos"
				btn="Novo pagamento"
				onClick={handleNewPayment}
			/>

			<PaymentsList
				pagamentos={pagamentos}
				onEdit={handleEdit}
				onCharge={handleCharge}
			/>

			<BaseModal
				isOpen={isCreateModalOpen}
				onClose={() => setIsCreateModalOpen(false)}
				title="Novo pagamento"
			>
				<p>teste</p>
			</BaseModal>

			<PaymentsModal
				pagamento={selectedPayment}
				isOpen={isEditModalOpen}
				onClose={() => {
					setIsEditModalOpen(false);
					setSelectedPayment(null);
				}}
			/>
		</div>
	);
}

export default DashboardPayments;
