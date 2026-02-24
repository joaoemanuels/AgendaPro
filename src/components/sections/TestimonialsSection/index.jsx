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
          <Eyebrow />
          <HeadingSection>Review</HeadingSection>
        </div>

        <div className="testimonials-right__content">
          <img src={GymRunning} alt="" />
          <p>Nome</p>
          <p>%%%%%%%%</p>
          <span>
            testetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetestetesteteste
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
