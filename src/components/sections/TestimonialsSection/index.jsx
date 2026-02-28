import Eyebrow from "../../ui/Eyebrow";
import HeadingSection from "../../ui/HeadingSection";
import homeImg from "@/assets/images/homeImg.jpg";
import GymRunning from "@/assets/icons/gym-running.svg";

import "./testimonials-section.styles.css";

function TestimonialsSection() {
  return (
    <div className="container-testimonials">
      <div className="testimonials-left">
        <img src={homeImg} alt="" />
      </div>

      <div className="testimonials-right">
        <div>
          <Eyebrow>O que dizem sobre</Eyebrow>
          <HeadingSection>Review</HeadingSection>
        </div>

        <div className="testimonials-right__content">
          <img src={GymRunning} alt="" />
          <p>Lucas Andrade</p>
          <p>%%%%%%%%</p>
          <span>
            Atendimento impecável do início ao fim. O barbeiro entendeu
            exatamente o estilo que eu queria e o resultado ficou melhor do que
            eu imaginava.
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
