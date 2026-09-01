import "./IndicationCards.css";
import indication from "../../utils/indication";
import { IoRestaurant } from "react-icons/io5";
import { FaHotel } from "react-icons/fa6";

interface Props {
	type: "Hosting" | "Restaurant";
}

export default function IndicationCards({ type }: Props) {
	const indicationList =
		type === "Hosting" ? indication.hosting : indication.restaurant;

	return (
		<div className="indication__cards_holder">
			<div className="indication__cards_header">
				<div className="cards__icon">
					{type === "Hosting" ? <FaHotel /> : <IoRestaurant />}
				</div>

				<div className="cards__title_holder">
					<h2 className="cards__title">
						{type === "Hosting" ? "Hospedagem" : "Restaurante"}
					</h2>
					<p className="cards__title_description">
						{type === "Hosting"
							? "Opções selecionadas para quem vem de longe."
							: "Boas escolhas a poucos minutos do local."}
					</p>
				</div>
			</div>
			<div className="indication__cards">
				{indicationList.map((item) => (
					<div className="indication__card">
						<h3 className="card__title">{item.title}</h3>
						<p className="card__description">{item.description}</p>
						<a href={item.link} className="card__link" target="_blank">
							Ver no mapa →
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
