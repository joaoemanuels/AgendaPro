//import homeImg from "@/assets/images/homeImg.jpg";
import Eyebrow from "../../ui/Eyebrow";
import HeadingSection from "../../ui/HeadingSection";
import SubmitButton from "../../ui/buttons/SubmitButton/index";

import "./pricing-section.styles.css";

function PricingSection() {
  return (
    <div className="container-pricingsection">
      <div className="pricingsection-content">
        <Eyebrow />
        <HeadingSection>Planos</HeadingSection>
      </div>
      <div className="pricingsection-cards">
        <div className="pricingsection-card">
          <div className="pricingsection-card__header">
            <p>50</p>
            <span>numeross</span>
          </div>

          <p>wdihwqwerdi</p>
          <span>dwjowdjodwjowdjodwjowdjodwjowdjo</span>

          <ul className="pricingsection-card__list">
            <li>ihfiehf</li>
            <li>ihfiehf</li>
            <li>ihfiehf</li>
            <li>ihfiehf</li>
            <li>ihfiehf</li>
          </ul>

          <SubmitButton>Plus</SubmitButton>
        </div>

        <div className="pricingsection-card">
          <div className="pricingsection-card__header">
            <p>50</p>
            <span>numeross</span>
          </div>

          <p>wdihwqwerdi</p>
          <span>dwjowdjodwjowdjodwjowdjodwjowdjo</span>

          <ul className="pricingsection-card__list">
            <li>ihfiehf</li>
            <li>ihfiehf</li>
            <li>ihfiehf</li>
            <li>ihfiehf</li>
            <li>ihfiehf</li>
          </ul>

          <SubmitButton>Master</SubmitButton>
        </div>

        <div className="pricingsection-card">
          <div className="pricingsection-card__header">
            <p>50</p>
            <span>numeross</span>
          </div>

          <p>wdihwqwerdi</p>
          <span>dwjowdjodwjowdjodwjowdjodwjowdjo</span>

          <ul className="pricingsection-card__list">
            <li>ihfiehf</li>
            <li>ihfiehf</li>
            <li>ihfiehf</li>
            <li>ihfiehf</li>
            <li>ihfiehf</li>
          </ul>

          <SubmitButton>Ultra</SubmitButton>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
