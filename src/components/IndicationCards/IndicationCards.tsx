import "./IndicationCards.css";
import hostingIcon from "../../assets/hosting.svg";
import restaurantIcon from "../../assets/restaurant.svg";

interface Props {
	type: "Hosting" | "Restaurant";
}

export default function IndicationCards({ type }: Props) {
	return (
		<div className="indication__cards_holder">
			<div className="indication__cards_header">
				<img
					className="cards__icon"
					src={type === "Hosting" ? hostingIcon : restaurantIcon}
					alt="icone de hoteis"
				/>
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
				{[1, 2, 3].map(() => (
					<div className="indication__card">
						<h3 className="card__title">Hotel Brasília Central</h3>
						<p className="card__description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
							quisquam ex modi quasi aperiam quod, recusandae itaque provident!
							Reiciendis rerum architecto quasi obcaecati vero nobis
							consequuntur? Inventore eum atque tempore.
						</p>
						<a href="" className="card__link">
							Ver no mapa →
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
