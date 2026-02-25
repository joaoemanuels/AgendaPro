import Eyebrow from "../../ui/Eyebrow";
import HeadingSection from "../../ui/HeadingSection";
import programBalance from "@/assets/images/programBalanceImg.jpg";
import programCardio from "@/assets/images/programCardioImg.jpg";
import programLifting from "@/assets/images/programLiftingImg.jpg";
import programMuscle from "@/assets/images/programMuscleImg.jpg";
import programPilates from "@/assets/images/programPilatesImg.jpg";
import programYoga from "@/assets/images/programYogaImg.jpg";

import "./program-section.styles.css";

function ProgramSection() {
  return (
    <div className="program-section">
      <Eyebrow>Treinos para todos os objetivos</Eyebrow>
      <HeadingSection>Nossos programas</HeadingSection>
      <div className="program-cards">
        <div className="program-card">
          <img src={programBalance} alt="" />
          <p>Cardio</p>
          <span>
            Treinos focados em resistência e queima calórica, ideais para
            emagrecimento, melhora do condicionamento físico e fortalecimento do
            sistema cardiovascular.
          </span>
        </div>
        <div className="program-card">
          <img src={programCardio} alt="" />
          <p>PowerLift</p>
          <span>
            Programa de alta intensidade voltado para ganho de força e
            performance. Ideal para quem busca evolução em cargas e resultados
            sólidos.
          </span>
        </div>
        <div className="program-card">
          <img src={programLifting} alt="" />
          <p>Calistenia</p>
          <span>
            Treinamento com o peso do próprio corpo que desenvolve força,
            equilíbrio e controle corporal de forma funcional e dinâmica.
          </span>
        </div>
        <div className="program-card">
          <img src={programMuscle} alt="" />
          <p>Musculação</p>
          <span>
            Treinos personalizados para hipertrofia, definição ou resistência
            muscular, com acompanhamento profissional e foco em resultado.
          </span>
        </div>
        <div className="program-card">
          <img src={programPilates} alt="" />
          <p>Yoga</p>
          <span>
            Aulas voltadas para equilíbrio, flexibilidade e conexão mente-corpo,
            promovendo bem-estar físico e mental.
          </span>
        </div>
        <div className="program-card">
          <img src={programYoga} alt="" />
          <p>Pilates</p>
          <span>
            Fortalecimento do core, melhora da postura e prevenção de lesões
            através de movimentos controlados e exercícios específicos.
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgramSection;
