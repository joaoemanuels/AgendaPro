import Eyebrow from "../../ui/Eyebrow";
import HeadingSection from "../../ui/HeadingSection";
import GymNutrition from "@/assets/icons/gym-nutrition.svg";
import GymTraining from "@/assets/icons/gym-training-running-run.svg";
import GymWeights from "@/assets/icons/gym-weights.svg";
import aboutImg from "@/assets/images/aboutImg.jpg";
import GymRunning from "@/assets/icons/gym-running.svg";

import "./about-section.styles.css";

function AboutSection() {
  return (
    <div className="container-aboutsection">
      <div className="aboutsection-left">
        <img src={aboutImg} alt="" />
      </div>
      <div className="aboutsection-right">
        <Eyebrow />
        <HeadingSection>Sobre nós</HeadingSection>
        <div className="aboutsection-cards">
          <div className="aboutsection-card">
            <img src={GymTraining} alt="" />
            <p>Progresso</p>
            <span>testetetestetetestetetestetetestete testetetestete</span>
          </div>
          <div className="aboutsection-card">
            <img src={GymNutrition} alt="" />
            <p>Trabalho</p>
            <span>testetetestetetestetetestetetestete testetetestete</span>
          </div>
          <div className="aboutsection-card">
            <img src={GymWeights} alt="" />
            <p>Nutrição</p>
            <span>testetetestetetestetetestetetestete testetetestete</span>
          </div>
          <div className="aboutsection-card">
            <img src={GymRunning} alt="" />
            <p>Alongamento</p>
            <span>testetetestetetestetetestetetestete testetetestete</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
