import "./section-order.styles.css";

function SectionOrder({ plano }) {
	return (
		<div className="order-product">
			<div className="product-info">
				<h3>{plano?.nome}</h3>
				<p>{plano?.descricao}</p>
			</div>
		</div>
	);
}

export default SectionOrder;
