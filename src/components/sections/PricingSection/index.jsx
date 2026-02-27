import { Link } from "react-router-dom";
import Eyebrow from "../../ui/Eyebrow";
import HeadingSection from "../../ui/HeadingSection";
import SubmitButton from "../../ui/buttons/SubmitButton/index";

import "./pricing-section.styles.css";

function PricingSection() {
  return (
    <div id="pricing" className="container-pricingsection">
      <div className="pricingsection-content">
        <Eyebrow>Melhores Planos</Eyebrow>
        <HeadingSection>Planos</HeadingSection>
      </div>
      <div className="pricingsection-cards">
        <div className="pricingsection-card">
          <div className="pricingsection-card__header">
            <p>79</p>
            <span>por Mês</span>
          </div>

          <p>Ideal para começar.</p>
          <span>Treinos personalizados e acesso completo à academia.</span>

          <ul className="pricingsection-card__list">
            <li>Treinos personalizados</li>
            <li>Avaliação física inicial</li>
            <li>Acesso à musculação</li>
            <li>Suporte via WhatsApp</li>
            <li>Reavaliação a cada 60 dias</li>
          </ul>
          <Link to="/booking">
            <SubmitButton>Começar no Plus</SubmitButton>
          </Link>
        </div>

        <div className="pricingsection-card">
          <div className="pricingsection-card__header">
            <p>119</p>
            <span>por Mês</span>
          </div>

          <p>Evolução mais rápida.</p>
          <span>Acompanhamento mais próximo e aulas inclusas.</span>

          <ul className="pricingsection-card__list">
            <li>Tudo do Plano Plus</li>
            <li>Treino atualizado mensalmente</li>
            <li>Acompanhamento nutricional básico</li>
            <li>Aulas em grupo inclusas</li>
            <li>Reavaliação a cada 30 dias</li>
          </ul>
          <Link to="/booking">
            <SubmitButton>Escolher Master</SubmitButton>
          </Link>
        </div>

        <div className="pricingsection-card">
          <div className="pricingsection-card__header">
            <p>179</p>
            <span>por Mês</span>
          </div>

          <p>Performance máxima.</p>
          <span>Suporte completo e foco total em resultados.</span>

          <ul className="pricingsection-card__list">
            <li>Tudo do Plano Master</li>
            <li>Personal trainer 2x por semana</li>
            <li>Plano alimentar personalizado</li>
            <li>Acesso livre a todas as aulas</li>
            <li>Suporte prioritário</li>
          </ul>
          <Link to="/booking">
            <SubmitButton>Quero o Ultra</SubmitButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
