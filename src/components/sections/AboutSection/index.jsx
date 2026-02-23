import "./about-section.styles.css";
import homeImg from "@/assets/images/homeImg.jpg";

function AboutSection() {
  return (
    <div className="container-aboutsection">
      <div className="aboutsection-left">
        <img src={homeImg} alt="" />
      </div>
      <div className="aboutsection-right">
        <span>Our best features</span>
        <h2>WHY CHOOSE US?</h2>
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
