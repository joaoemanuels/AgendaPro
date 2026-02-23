//import homeImg from "@/assets/images/homeImg.jpg";
import Eyebrow from "../../ui/Eyebrow";
import HeadingSection from "../../ui/HeadingSection";
import "./pricing-section.styles.css";

function PricingSection() {
  return (
    <div className="container-pricingsection">
      <div className="pricingsection-content">
        <Eyebrow />
        <HeadingSection />
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

          <button type="button" className="pricingsection-card__btn">
            teste
          </button>
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

          <button type="button" className="pricingsection-card__btn">
            teste
          </button>
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

          <button type="button" className="pricingsection-card__btn">
            teste
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
