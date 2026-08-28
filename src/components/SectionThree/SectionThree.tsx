import IndicationCards from "../IndicationCards";
import "./SectionThree.css";

export default function SectionThree() {
	return (
		<div id="hosting" className="section_3">
			<div className="sectionContainer">
				<div className="container">
					<div className="indication__title">
						<span className="indication__title_span">PLANEJE SUA VIAGEM</span>
						<h2 className="indication__title_text">
							Onde ficar e comer perto do encontro.
						</h2>
					</div>
					<div className="indication__cards_box_holder">
						<IndicationCards type="Hosting" />
						<IndicationCards type="Restaurant" />
					</div>
				</div>
			</div>
		</div>
	);
}
