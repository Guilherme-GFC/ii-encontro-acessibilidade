// import leaf from "../../assets/leaf.svg";
import "./Header.css";
import logo from "../../assets/logos_evento/Acess_UCs_--08branco-2.png";

export default function Header() {
	function scrollToSection(id: string) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
			history.pushState(null, "", `#${id}`);
		}
	}
	return (
		<div className="container">
			<header>
				<div className="logo_box">
					<img src={logo} alt="logo" />
					<p className="logo__title">
						ICMBIO • Encontro Nacional Sobre Acessibildade
					</p>
				</div>
				<nav className="navigation">
					<a
						href="#schedules"
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("schedules");
						}}
					>
						Programação
					</a>
					<a
						href="#hosting"
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("hosting");
						}}
					>
						Hospedagem
					</a>
					<a href="https://maps.app.goo.gl/LEPYT8Yew6cJVuuK7" target="_blank">
						Como Chegar
					</a>
					<a
						href="https://forms.gle/dc1CDg28f4oEKjHZA"
						target="_blank"
						className="sign_link"
					>
						Fazer Inscrição
					</a>
				</nav>
			</header>
		</div>
	);
}
