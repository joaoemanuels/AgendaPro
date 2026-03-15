import { useEffect } from "react";

import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/sections/AboutSection";
import ProgramSection from "../../components/sections/ProgramSection";
import PricingSection from "../../components/sections/PricingSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import TeamSection from "../../components/sections/TeamSection";

import "../Home/home.styles.css";

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ProgramSection />
			<TeamSection />
			<PricingSection />
			<TestimonialsSection />
		</>
	);
}

export default Home;
