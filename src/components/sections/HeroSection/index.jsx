import SubmitButton from "../../ui/buttons/submitButton";
import homeImg from "@/assets/images/homeImg.jpg";

import "./hero-section.styles.css";

function HeroSection() {
  return (
    <div className="container-herosection">
      <div className="herosection-left">
        <div className="herosection-left-container">
          <span>Since - 1998</span>
          <h1>MAKE YOUR BODY SHAPE</h1>
          <p>
            qwfqwfqwf qwfqwfqwf qwfqwfqwfqwfqwfqwf qrqw <br />
            fasa2qwrqwrqwr qwrqwrfqqwfqwfqwfwrqwr
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
