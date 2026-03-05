import SectionOrder from "../../ui/buttons/SectionOrder";
import "./order-summary.styles.css";

function OrderSummary({ pedido }) {
	const total = pedido.plano?.valor || 0;
	const valorFormatado = total.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	return (
		<div className="order-summary">
			<div className="trainer-card">
				<div className="trainer-rating">
					★★★★★ <span>5/5</span>
				</div>

				<h3 className="trainer-name">Nome 123</h3>

				<p className="trainer-description">
					Personal trainer registrado no Conselho Federal de Educação Física
				</p>

				<a
					href="https://wa.me/5599999999999"
					target="_blank"
					rel="noopener noreferrer"
					className="trainer-whatsapp"
				>
					Whatsapp
				</a>
			</div>

			<h2>Seu pedido</h2>

			<div className="order-row">
				{pedido.plano && <SectionOrder plano={pedido.plano} />}
			</div>

			<div className="order-divider" />

			<div className="order-row">
				<span>Data</span>
				<span>{pedido.data || "-"}</span>
			</div>

			<div className="order-row">
				<span>Horário</span>
				<span>{pedido.hora || "-"}</span>
			</div>

			<div className="order-row">
				<span>Objetivo</span>
				<span>{pedido.objetivo || "-"}</span>
			</div>

			<div className="order-divider" />

			<div className="order-total">
				<span>Total</span>
				<span>{valorFormatado}</span>
			</div>
		</div>
	);
}

export default OrderSummary;
