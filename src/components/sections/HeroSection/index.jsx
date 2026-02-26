import SubmitButton from "../../ui/buttons/SubmitButton";
import homeImg from "@/assets/images/homeImg.jpg";

import "./hero-section.styles.css";

function HeroSection() {
  return (
    <div className="container-herosection">
      <div className="herosection-left">
        <div className="herosection-left-container">
          <span>Sua evolução começa aqui</span>
          <h1>RESULTADOS DEFINITIVOS</h1>
          <p>
            Conheça a minha consultoria fitness online e tenha resultados
            surpreendentes com treinos curtos e inteligentes.
          </p>
          <SubmitButton
            onClick={() => document.getElementById("pricing")?.scrollIntoView()}
          >
            Ver planos
          </SubmitButton>
        </div>
      </div>
      <div className="herosection-right">
        <img src={homeImg} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
