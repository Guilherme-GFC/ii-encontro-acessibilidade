import "./Landing.css";
import landingImg from "../../assets/img_landing.svg";

export default function Landing() {
	return (
		<div className="container landing">
			<div className="left_container">
				<p className="date">
					15 e 16 de Setembro • Centro de Visitantes • Parque Nacional do Iguaçu
				</p>
				<h1>
					II Encontro sobre Acessibilidade em Unidades de Conservação Federais
				</h1>
				<p className="description">
					Dois dias para compartilhar práticas, construir redes e ampliar o
					acesso de todas as pessoas às áreas naturais protegidas.
				</p>
				<div className="helper_box">
					<p>● Parque Nacional do Iguaçu</p>
					<p>● 08:00 às 18:00</p>
					<p>● Evento acessível</p>
				</div>
			</div>
			<div className="right_container">
				<img src={landingImg} alt="imagem evento" />
			</div>
		</div>
	);
}
