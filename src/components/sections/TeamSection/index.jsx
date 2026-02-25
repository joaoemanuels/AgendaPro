import Eyebrow from "../../ui/Eyebrow";
import HeadingSection from "../../ui/HeadingSection";
import Whatsapp from "@/assets/icons/instagram.png";
import Instagram from "@/assets/icons/twitter.png";
import Twitter from "@/assets/icons/whatsapp.png";

import "./team-section.styles.css";

function TeamSection() {
  return (
    <div className="team-section">
      <Eyebrow />
      <HeadingSection>Nosso time</HeadingSection>
      <div className="team-section-cards">
        <div className="team-section-card">
          <div className="team-section-card__content">
            <a href="">
              <img src={Whatsapp} alt="" />
            </a>
            <a href="">
              <img src={Instagram} alt="" />
            </a>
            <a href="">
              <img src={Twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
