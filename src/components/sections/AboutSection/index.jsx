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
        <span>
          Personal trainer registrado no Conselho Federal de Educação Física sob
          o número 123456/PB.
        </span>
      </div>
      <div className="aboutsection-right">
        <Eyebrow>Sobre Mim</Eyebrow>
        <HeadingSection>Nome 123</HeadingSection>
        <div className="aboutsection-cards">
          <div className="aboutsection-card">
            <img src={GymTraining} alt="" />
            <p>Progresso</p>
            <span>
              Avaliação constante e ajustes estratégicos para garantir evolução
              contínua.
            </span>
          </div>
          <div className="aboutsection-card">
            <img src={GymNutrition} alt="" />
            <p>Disciplina</p>
            <span>
              Ambiente motivador que incentiva foco, constância e superação
              diária.
            </span>
          </div>
          <div className="aboutsection-card">
            <img src={GymWeights} alt="" />
            <p>Nutrição</p>
            <span>
              Orientação alimentar para potencializar seus resultados no treino.
            </span>
          </div>
          <div className="aboutsection-card">
            <img src={GymRunning} alt="" />
            <p>Alongamento</p>
            <span>
              Mobilidade e prevenção de lesões para melhor desempenho e postura.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
