import NavbarSection from "../../components/sections/NavbarSection";
import HeroSection from "../../components/sections/HeroSection";
import "../Home/home.styles.css";
import AboutSection from "../../components/sections/AboutSection";
import ProgramSection from "../../components/sections/ProgramSection";
import PricingSection from "../../components/sections/PricingSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import TeamSection from "../../components/sections/TeamSection";
import FooterSection from "../../components/sections/FooterSection";

function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <TeamSection />
      <PricingSection />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}

export default Home;
