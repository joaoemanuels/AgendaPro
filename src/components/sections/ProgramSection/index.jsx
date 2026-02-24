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
      <Eyebrow />
      <HeadingSection>Nossos programas</HeadingSection>
      <div className="program-cards">
        <div className="program-card">
          <img src={programBalance} alt="" />
          <p>Cardio</p>
          <span>
            afqwfwfwfwfwfwfwfgfdsufgdughsidtestetsgfdsufgdughsidtestetsgfdsufgdughsid
          </span>
        </div>
        <div className="program-card">
          <img src={programCardio} alt="" />
          <p>PowerLift</p>
          <span>
            afqwfwfwfwfwfwfwfgfdsufgdughsidtestetsgfdsufgdughsidtestetsgfdsufgdughsid
          </span>
        </div>
        <div className="program-card">
          <img src={programLifting} alt="" />
          <p>Calistenia</p>
          <span>
            afqwfwfwfwfwfwfwfgfdsufgdughsidtestetsgfdsufgdughsidtestetsgfdsufgdughsid
          </span>
        </div>
        <div className="program-card">
          <img src={programMuscle} alt="" />
          <p>Musculação</p>
          <span>
            afqwfwfwfwfwfwfwfgfdsufgdughsidtestetsgfdsufgdughsidtestetsgfdsufgdughsid
          </span>
        </div>
        <div className="program-card">
          <img src={programPilates} alt="" />
          <p>Yoga</p>
          <span>
            afqwfwfwfwfwfwfwfgfdsufgdughsidtestetsgfdsufgdughsidtestetsgfdsufgdughsid
          </span>
        </div>
        <div className="program-card">
          <img src={programYoga} alt="" />
          <p>Pilates</p>
          <span>
            afqwfwfwfwfwfwfwfgfdsufgdughsidtestetsgfdsufgdughsidtestetsgfdsufgdughsid
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProgramSection;
