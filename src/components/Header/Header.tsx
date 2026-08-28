import leaf from "../../assets/leaf.svg";
import "./Header.css";

export default function Header() {
	return (
		<div className="container section_1">
			<header>
				<div className="logo_box">
					<img src={leaf} alt="folha" />
					<p className="logo__title">ICMBIO • Encontro Nacional</p>
				</div>
				<nav className="navigation">
					<a href="#schedules">Programação</a>
					<a href="https://maps.app.goo.gl/XMJ99J2fYUEfXk3T9">Como Chegar</a>
					<a href="#hosting">Hospedagem</a>
					<a href="" className="sign_link">
						Fazer Inscrição
					</a>
				</nav>
			</header>
		</div>
	);
}
