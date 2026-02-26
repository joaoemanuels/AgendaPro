import BillingForm from "../../components/booking/BillingForm";
import HeroBooking from "../../components/booking/HeroBooking";
import OrderSummary from "../../components/booking/OrderSummary";
import TestimonialsSection from "../../components/booking/TestimonialsBooking";

import "../Booking/booking.styles.css";

function Booking() {
  return (
    <>
      <HeroBooking />
      <div className="checkout-layout">
        <BillingForm />
        <OrderSummary />
      </div>
      <TestimonialsSection />
    </>
  );
}

export default Booking;
