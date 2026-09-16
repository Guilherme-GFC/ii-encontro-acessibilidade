import CardSpeaker from "../CardSpeaker";
import "./SectionFour.css";
import speakers from "../../utils/speakers";

export default function SectionFour() {
	return (
		<div className="section_4">
			<div className="container">
				<div className="speakers__header">
					<span className="speakers__title_span">CONHEÇA OS CONVIDADOS</span>
					<h2 className="speakers__title_text">
						Quem estará com a gente nesta edição.
					</h2>
				</div>
				<div className="cards_speakers">
					{speakers.map((item, index) => {
						return (
							<CardSpeaker
								key={index}
								name={item.name}
								description={item.description}
								photo={item.img}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
