import SubmitButton from "../../ui/buttons/submitButton";
import homeImg from "@/assets/images/homeImg.jpg";
import Eyebrow from "../../ui/Eyebrow";

import "./hero-section.styles.css";

function HeroSection() {
  return (
    <div className="container-herosection">
      <div className="herosection-left">
        <div className="herosection-left-container">
          <Eyebrow />
          <h1>MAKE YOUR BODY SHAPE</h1>
          <p>
            qwfqwfqwf qwfqwfqwf qwfqwfqwfqwfqwfqwf qrqwasa2qwrqwrqwr qwrqwrfqqwfqwfqwfwrqwr
          </p>
          <SubmitButton />
        </div>
      </div>
      <div className="herosection-right">
        <img src={homeImg} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
