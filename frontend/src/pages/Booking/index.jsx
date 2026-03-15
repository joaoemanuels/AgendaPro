import { useState, useEffect } from "react";

import BillingForm from "../../components/booking/BillingForm";
import HeroBooking from "../../components/booking/HeroBooking";
import OrderSummary from "../../components/booking/OrderSummary";
import TestimonialsSection from "../../components/booking/TestimonialsBooking";

import "../Booking/booking.styles.css";

function Booking() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
	const [pedido, setPedido] = useState({
		plano: null,
		data: "",
		valor: "",
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
