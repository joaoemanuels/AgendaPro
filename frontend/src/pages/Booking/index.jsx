import { useState } from "react";
import BillingForm from "../../components/booking/BillingForm";
import HeroBooking from "../../components/booking/HeroBooking";
import OrderSummary from "../../components/booking/OrderSummary";
import TestimonialsSection from "../../components/booking/TestimonialsBooking";

import "../Booking/booking.styles.css";

function Booking() {
	const [pedido, setPedido] = useState({
		plano: null,
		data: "",
		hora: "",
		objetivo: "",
	});
	return (
		<>
			<HeroBooking />
			<div className="checkout-layout">
				<BillingForm pedido={pedido} setPedido={setPedido} />
				<OrderSummary pedido={pedido} />
			</div>
			<TestimonialsSection />
		</>
	);
}

export default Booking;
