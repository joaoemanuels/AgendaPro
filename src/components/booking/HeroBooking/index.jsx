import "./hero-booking.styles.css";
import homeImg from "@/assets/images/homeImg.jpg";

function HeroBooking() {
  return (
    <div className="herobooking">
      <div className="herobooking-container">
        <img src={homeImg} alt="Treino na academia" />
        <div className="herobooking-content">
          <h1>VOCÊ ESTÁ QUASE LÁ</h1>
          <p>
            Entre com as informações de pagamento e dê o passo mais importante
            em direção aos seus resultados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroBooking;
