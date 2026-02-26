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
              Acompanhamos sua evolução de perto com metas claras, avaliação
              física e ajustes estratégicos no treino para garantir resultados
              consistentes.
            </span>
          </div>
          <div className="aboutsection-card">
            <img src={GymNutrition} alt="" />
            <p>Disciplina</p>
            <span>
              Criamos um ambiente motivador que incentiva foco, constância e
              superação diária, ajudando você a manter o ritmo e não desistir no
              meio do caminho.
            </span>
          </div>
          <div className="aboutsection-card">
            <img src={GymWeights} alt="" />
            <p>Nutrição</p>
            <span>
              Orientações nutricionais que complementam seus treinos e
              potencializam seus resultados, seja para ganho de massa, definição
              ou condicionamento.
            </span>
          </div>
          <div className="aboutsection-card">
            <img src={GymRunning} alt="" />
            <p>Alongamento</p>
            <span>
              Programas de mobilidade e pilates que fortalecem o corpo, melhoram
              a postura e previnem lesões, garantindo performance e qualidade de
              vida.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
