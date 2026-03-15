import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { personais as personaisMock } from "../../../../../backend/database/mock";

import Eyebrow from "../../ui/Eyebrow";
import HeadingSection from "../../ui/HeadingSection";

import Whatsapp from "@/assets/icons/instagram.png";
import Instagram from "@/assets/icons/twitter.png";
import Twitter from "@/assets/icons/whatsapp.png";

import "./team-section.styles.css";

function TeamSection() {
	const [personais, setpersonais] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchTeam() {
			try {
				const { data, error } = await supabase.from("team").select("*");
				if (error || !data || data.length === 0) {
					console.warn("Erro ou sem dados do Supabase, usando mock", error);
					setpersonais(personaisMock);
				} else {
					setpersonais(data);
				}
			} catch (err) {
				console.error("Falha ao buscar do Supabase, usando mock", err);
				setpersonais(personaisMock);
			} finally {
				setLoading(false);
			}
		}

		fetchTeam();
	}, []);

	if (loading) return <p>Carregando equipe...</p>;

	return (
		<div id="TeamSection" className="team-section">
			<Eyebrow>Nossa Equipe</Eyebrow>
			<HeadingSection>Nosso time</HeadingSection>

			<div className="team-section-cards">
				{personais.map((member) => (
					<div key={member.id} className="team-section-card">
						<div className="team-section-card__content">
							<img src={member.image || member.image_url} alt="" />
							<h4>{member.name}</h4>

							<div className="team-section-socials">
								<a href={member.whatsapp}>
									<img src={Whatsapp} alt="Whatsapp" />
								</a>

								<a href={member.instagram}>
									<img src={Instagram} alt="Instagram" />
								</a>

								<a href={member.twitter}>
									<img src={Twitter} alt="Twitter" />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default TeamSection;
