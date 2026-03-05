import SectionOrder from "../../ui/buttons/SectionOrder";
import "./order-summary.styles.css";

function OrderSummary({ pedido }) {
	const subtotal = pedido.plano?.preco || 0;

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

			{pedido.plano && <SectionOrder plano={pedido.plano} />}

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

			<div className="order-row">
				<span>Subtotal</span>
				<span>R$ {subtotal}</span>
			</div>

			<div className="order-total">
				<span>Total</span>
				<span>R$ {subtotal}</span>
			</div>
		</div>
	);
}

export default OrderSummary;
