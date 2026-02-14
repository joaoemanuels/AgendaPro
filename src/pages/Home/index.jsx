import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import TeamSection from "../components/sections/TeamSection";
import PricingSection from "../components/sections/PricingSection";
import GallerySection from "../components/sections/GallerySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <PricingSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

export default Home;
