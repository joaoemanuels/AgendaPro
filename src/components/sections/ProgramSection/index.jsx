import Eyebrow from "../../ui/Eyebrow";
import HeadingSection from "../../ui/HeadingSection";
import "./program-section.styles.css";
import homeImg from "@/assets/images/homeImg.jpg";

function ProgramSection() {
  return (
    <div className="program-section">
      <Eyebrow />
      <HeadingSection />
      <div className="program-cards">
        <div className="program-card">
          <img src={homeImg} alt="" />
          <p>teste</p>
          <span>
            afqwfwfwfwfwfwfwfgfdsufgdughsidtestetsgfdsufgdughsidtestetsgfdsufgdughsid
          </span>
        </div>
        <div className="program-card">
          <img src={homeImg} alt="" />
          <p>teste</p>
          <span>
            afqwfwfwfwfwfwfwfgfdsufgdughsidtestetsgfdsufgdughsidtestetsgfdsufgdughsid
          </span>
        </div>
        <div className="program-card">
          <img src={homeImg} alt="" />
          <p>teste</p>
          <span>
            afqwfwfwfwfwfwfwfgfdsufgdughsidtestetsgfdsufgdughsidtestetsgfdsufgdughsid
          </span>
        </div>
        <div className="program-card">
          <img src={homeImg} alt="" />
          <p>teste</p>
          <span>
            afqwfwfwfwfwfwfwfgfdsufgdughsidtestetsgfdsufgdughsidtestetsgfdsufgdughsid
          </span>
        </div>
        <div className="program-card">
          <img src={homeImg} alt="" />
          <p>teste</p>
          <span>
            afqwfwfwfwfwfwfwfgfdsufgdughsidtestetsgfdsufgdughsidtestetsgfdsufgdughsid
          </span>
        </div>
        <div className="program-card">
          <img src={homeImg} alt="" />
          <p>teste</p>
          <span>
            afqwfwfwfwfwfwfwfgfdsufgdughsidtestetsgfdsufgdughsidtestetsgfdsufgdughsid
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgramSection;
