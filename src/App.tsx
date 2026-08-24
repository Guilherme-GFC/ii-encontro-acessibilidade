function App() {
	return (
		<div className="container">
			<header>
				<h1>Nome do Seu Evento</h1>
				<p>Data e Local do Evento</p>
			</header>

			<main>
				<section className="cronograma">
					<h2>Cronograma</h2>
					{/* Aqui vamos inserir os dados da sua imagem depois */}
					<ul>
						<li>
							<strong>08:00</strong> - Credenciamento e Café de Boas-vindas
						</li>
						<li>
							<strong>09:00</strong> - Palestra de Abertura
						</li>
						<li>
							<strong>10:30</strong> - Coffee Break
						</li>
						<li>
							<strong>11:00</strong> - Painel Principal
						</li>
					</ul>
				</section>

				<section className="hoteis">
					<h2>Hotéis Próximos</h2>
					<p>
						Para o seu conforto, separamos algumas opções de hospedagem próximas
						ao local do evento:
					</p>
					<div className="lista-hoteis">
						<div className="card-hotel">
							<h3>Hotel Exemplo 1</h3>
							<p>Apenas 5 minutos caminhando do evento.</p>
							<a href="#">Ver no mapa</a>
						</div>
						<div className="card-hotel">
							<h3>Hotel Exemplo 2</h3>
							<p>Ótimo custo-benefício, 10 minutos de carro.</p>
							<a href="#">Ver no mapa</a>
						</div>
					</div>
				</section>
			</main>

			<footer>
				<p>Esperamos você lá!</p>
			</footer>
		</div>
	);
}

export default App;
