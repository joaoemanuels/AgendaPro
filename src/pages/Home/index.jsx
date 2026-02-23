import NavbarSection from "../../components/sections/NavbarSection";
import HeroSection from "../../components/sections/HeroSection";
import "../Home/home.styles.css";
import AboutSection from "../../components/sections/AboutSection";
import ProgramSection from "../../components/sections/ProgramSection";
import PricingSection from "../../components/sections/PricingSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";

function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <PricingSection />
      <TestimonialsSection />
    </>
  );
}

export default Home;
