import Eyebrow from "../../ui/Eyebrow";
import HeadingSection from "../../ui/HeadingSection";
import "./testimonials-section.styles.css";
import homeImg from "@/assets/images/homeImg.jpg";

function TestimonialsSection() {
  return (
    <div className="container-testimonials">
      <div className="testimonials-left">
        <img src={homeImg} alt="" />
      </div>

      <div className="testimonials-right">
        <div>
          <Eyebrow />
          <HeadingSection />
        </div>

        <div className="testimonials-right__content">
          <img src="" alt="" />
          <p>Nome</p>
          <p>icone</p>
          <span>testetestetestetestetestetesteteste</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
