import andre_img from "../assets/speakers_profile_img/andre.jpeg";
import fernando_img from "../assets/speakers_profile_img/fernanda.jpeg";
import nagila_img from "../assets/speakers_profile_img/nagila.jpeg";
import rafael_img from "../assets/speakers_profile_img/rafael.png";
import claudio_img from "../assets/speakers_profile_img/claudio.jpeg";
import bartyra_img from "../assets/speakers_profile_img/bartyra.jpeg";
import bell_img from "../assets/speakers_profile_img/bell.jpeg";
import elisabete_img from "../assets/speakers_profile_img/elisabete.jpg";
import juarez_img from "../assets/speakers_profile_img/juarez.jpeg";
import apolonio_img from "../assets/speakers_profile_img/apolonio.jpeg";

interface Speakers {
	name: string;
	description: string;
	img: string;
}

const speakers: Speakers[] = [
	{
		name: "Fernanda Boaventura",
		description:
			"Fernanda Boaventura é mulher com deficiência, servidora pública federal, escritora, palestrante e especialista em inclusão e direitos das pessoas com deficiência. Analista Ambiental do ICMBio, atualmente atua como Coordenadora Pedagógica na Enap. É especialista em Gestão Pública e em Acessibilidade e Tecnologias Assistivas, com trajetória em gestão de pessoas, educação corporativa e políticas públicas. É autora do livro Ser ou não ter.",
		img: fernando_img,
	},
	{
		name: "Nágila Campos",
		description:
			"Nágila Maria Pereira Campos é Analista Ambiental do Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio) desde 2007, acumula ampla experiência na gestão territorial, proteção da biodiversidade e estruturação do turismo sustentável em Unidades de Conservação. Graduada em Ciências Biológicas e Mestra em Biodiversidade em Unidades de Conservação pela Escola Nacional de Botânica Tropical (ENBT/Jardim Botânico do Rio de Janeiro). Ao longo de 14 anos de atuação no Parque Nacional de Ubajara (CE) — um dos principais polos de ecoturismo do Nordeste —, desempenhou papel na coordenação e ordenamento do uso público. Sua contribuição abrangeu desde o manejo e sinalização de trilhas e condução de visitantes até a articulação comunitária e educação ambiental, promovendo a integração entre conservação da natureza, desenvolvimento do turismo local e engajamento social. Atualmente, compõe a equipe do Núcleo de Gestão Integrada (NGI) ICMBio Araripe, onde aplica sua bagagem técnica e prática na consolidação de estratégias de visitação consciente, manejo participativo e valorização do patrimônio natural do bioma Caatinga.",
		img: nagila_img,
	},
	{
		name: "André Franzini",
		description:
			"Gerente de Sustentabilidade da Urbia Cataratas Biólogo, Pós-Graduado em ESG e Sustentabilidade Corporativa pela FGV, Mestre em Ciências do Ambiente e Sustentabilidade na Amazônia pela Universidade Federal do Amazonas, com mais 20 anos de experiência na área ambiental.  Há mais de 6 anos vem atuando em Gestão de Parque sob concessão, entre eles o Parque do Ibirapuera, Horto Florestal e Cantareira em São Paulo e Parque Nacional do Iguaçu no Paraná",
		img: andre_img,
	},
	{
		name: "Rafael Baroni",
		description:
			"Arquiteto formado com mais de vinte anos de experiência e atuando na área de arquitetura e engenharia em suas diversas disciplinas e dimensões de alcance, com foco na relação dos espaços com a experiência de uso e vivência humana. Atuando no vasto mundo dos projetos por todas as fases e ciclos, desde a sua concepção, desenvolvimento, execução de campo e acompanhamento técnico de obras, sendo um entusiasta da formação, tecnologias, ferramentas e metodologias das interrelações do edifício com o ser humano e sua ambientabilidade.",
		img: rafael_img,
	},
	{
		name: "Claudio Mauricio",
		description:
			"Claudio Roberto Marquetto Mauricio é professor da Universidade Estadual do Oeste do Paraná (UNIOESTE), atuando nos cursos de graduação em Ciência da Computação e nos programas de pós-graduação PPGTGS (Tecnologias, Gestão e Sustentabilidade) e PPGCOMP (Ciência da Computação). Possui graduação em Ciência da Computação pela UNIOESTE, mestrado em Ciências da Computação pela UFSC e doutorado em Engenharia Elétrica e Informática Industrial pela UTFPR.",
		img: claudio_img,
	},
	{
		name: "Bartyra Marques",
		description:
			"Bartyra Cavalcanti Cruz de Paula Marques é arquiteta e urbanista graduada pela UnB com MBA em Projetos Aplicados à Construção Civil. Ingressou no ICMBio em 2025, aprovada no último concurso público da autarquia. Atua como analista administrativo na Coordenação de Projetos de Engenharia e Arquitetura (COPEA), onde acompanha as demandas de projetos, obras e serviços de engenharia focados na melhoria e estruturação das Unidades de Conservação.",
		img: bartyra_img,
	},
	{
		name: "Bell Machado",
		description:
			"Bell Machado é graduada em Filosofia e Mestre em Multimeios pela Unicamp, com a dissertação sobre Audiodescrição no cinema. Está entre os pioneiros em audiodescrição no Brasil. Diretora na empresa Bell Machado Audiodescrição e acessibilidade cultural, onde atua como roteirista e narradora desde 1999, em projetos de audiodescrição gravada em cinema, museus, turismo e AD ao vivo em teatro. Docente desde 2021 no curso de pós graduação em audiodescrição pela PUC-Minas. ",
		img: bell_img,
	},
	{
		name: "Elisabete Holanda",
		description:
			"Elisabete Hulgado Holanda é Analista Ambiental do Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio), atuando no Parque Nacional do Itatiaia, onde desenvolve e coordena ações relacionadas à gestão socioambiental, participação social, educação ambiental, inclusão e acessibilidade e como instrutora da Coordenação Geral de Uso Público e Serviços Ambientais - CGEUP, ministrando capacitações nas áreas de Interpretação Ambiental e atendimento às pessoas com deficiência, contribuindo para a formação de servidores e profissionais que atuam na gestão e na visitação em Unidades de Conservação Bióloga e mestre pela Escola Nacional de Botânica Tropical do Jardim Botânico do Rio de Janeiro, na linha de Planejamento e Gestão da Biodiversidade em Unidades de Conservação, possuem trajetória profissional dedicada à conservação da biodiversidade e à gestão de áreas protegidas. Sua atuação e pesquisa têm como foco a promoção da acessibilidade e da inclusão de pessoas com deficiência em áreas naturais. É autora do Guia Orientativo para Implementação de Acessibilidade em Unidades de Conservação, desenvolvido a partir de sua experiência profissional e acadêmica.",
		img: elisabete_img,
	},
	{
		name: "Juarez Michelotti",
		description:
			"Juarez Michelotti. Pai da Manuela. Engenheiro florestal formado pela Universidade Federal do Paraná – UFPR; com especialização em conservação e manejo da biodiversidade pela Universidade Regional de Joinville – UNIVILLE e mestrado em Liderança em Conservação da Natureza pela Universidade Estadual do Colorado - CSU (EUA). É ator professional, tendo atuado e realizado trabalhos de sonoplastia junto ao grupo PalavrAção da UFPR (1997 – 1998). Trabalhou com teatro de bonecos (2010 – 2012) com bonecos de manipulação direta. Foi mediador em eventos e mesas de debates em diversas oportunidades em congressos e seminários. Seu principal objetivo é colaborar no desenvolvimento e promoção de experiências significativas e acessíveis para pessoas em áreas naturais protegidas. Trabalha no Serviço Social do Comércio (Sesc) em São Paulo, Brasil, desde 2009. Participou da equipe de planejamento da Reserva Natural Sesc Bertioga no sudeste do Brasil e coordena sua gestão. Coordenou cursos relacionados a trilhas com desenho universal, infraestrutura pata unidades de conservação e interpretação ambiental. Anteriormente, foi diretor do Centro de Educação ao Ar Livre Volta Velha.",
		img: juarez_img,
	},
	{
		name: "Apolônio Rodrigues",
		description:
			"Apolônio Rodrigues, Biólogo, especialista em biologia da conservação. Lotado no Parque Nacional do Iguaçu há 35 anos, atuando em todas as áreas temáticas, neste período. Larga experiência em uso público, implantação de estruturas e operações de apoio à visitação. Atualmente coordenando o Núcleo de Trilhas do Parque Nacional do Iguaçu.",
		img: apolonio_img,
	},
];

export default speakers;
