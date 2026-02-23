import Eyebrow from "../../ui/Eyebrow";
import HeadingSection from "../../ui/HeadingSection";
import "./about-section.styles.css";
import homeImg from "@/assets/images/homeImg.jpg";

function AboutSection() {
  return (
    <div className="container-aboutsection">
      <div className="aboutsection-left">
        <img src={homeImg} alt="" />
      </div>
      <div className="aboutsection-right">
        <Eyebrow />
        <HeadingSection />
        <div className="aboutsection-cards">
          <div className="aboutsection-card">
            <img src="" alt="" />
            <p>testre</p>
            <span>testetetestetetestetetestetetestete testetetestete</span>
          </div>
          <div className="aboutsection-card">
            <img src="" alt="" />
            <p>testre</p>
            <span>testetetestetetestetetestetetestete testetetestete</span>
          </div>
          <div className="aboutsection-card">
            <img src="" alt="" />
            <p>testre</p>
            <span>testetetestetetestetetestetetestete testetetestete</span>
          </div>
          <div className="aboutsection-card">
            <img src="" alt="" />
            <p>testre</p>
            <span>testetetestetetestetetestetetestete testetetestete</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
