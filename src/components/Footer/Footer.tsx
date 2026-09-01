import "./Footer.css";

export default function Footer() {
	return (
		<footer>
			<div className="container footer-box">
				<div className="footer__top">
					<div className="footer__text-holder">
						<p className="footer__title">
							Vamos construir unidades de conservação mais acessíveis?
						</p>
						<span className="footer__span">
							Em caso de necessidade específica, fale com a organização.
						</span>
					</div>
					<a href="https://forms.gle/dc1CDg28f4oEKjHZA" target="_blank">
						Garantir minha vaga
					</a>
				</div>

				<div className="footer__bottom">
					<div className="footer__event">
						Segundo Encontro sobre Acessibilidade • 2026
					</div>
					<div className="footer__contact">
						usopublicoiguacu@icmbio.gov.br • (48) 8825-2492
					</div>
				</div>
			</div>
		</footer>
	);
}
