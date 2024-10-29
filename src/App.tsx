import "./App.css";
import BoutonCed from "./bouttonCed";

function App() {
	const tableauCed = [
		{
			description: "C'est l'histoire du ptit dej, tu la connais ? Pas de Bol",
		},
		{
			description: "Quelle mamie fait peur aux voleurs ? Mamie Traillette. ",
		},
		{
			description:
				"C'est quoi un petit pois avec une épée face à une carotte avec une épée ? Un bon duel",
		},
		{
			description:
				"Que faisaient les dinosaures quand ils n'arrivaient pas à se décider ? Des tirageosaures.",
		},
		{
			description:
				"Pourquoi est-ce qu'il faut mettre tous les crocos en prison ? Parce que les crocos dealent.",
		},
	];

	const tableauAngelica = [
		{
			description:
				"Tu ne serais pas une sortie de secours ? Parce que tu m’exit.",
		},
		{
			description: "J’ai un problème avec mon portable : il manque ton numéro.",
		},
		{
			description:
				"Ton père il ne serait pas dealer de weed ? Parce que t’es sacrément bien roulée.",
		},
		{
			description:
				"Tu ne serais pas l’intro Netflix ? Parce que j’ai trop envie de te sauter!",
		},
		{
			description:
				"Les gens m’appellent Angélica, mais toi tu peux m’appeler ce soir.",
		},
	];

	const tableauAlex = [
		{
			description:
				"Le père de Toto regarde son carnet de notes: - Tu sais quel est le point commun entre ton carnet de notes et un verre de limonade ? Lui demande t-il -Euh ... non. - Les bulles ! ",
		},
		{
			description:
				"C'est l'histoire d'un pingouin qui respire par les fesses, un jour il s'est assis et il est mort !",
		},
		{
			description:
				"La maman de Toto regarde le cahier de devoir de son fils :- Qu'est-ce que tu écris mal ! Tu ne pourrais pas écrire plus gros ? - Ah non. Quand j’écris trop gros, la maîtresse voit toutes les fautes",
		},
		{
			description:
				"Toto rentre de l’école en courant et se réfugie dans la salle de bain. Sa mère lui demande : Pourquoi tu vas au bain, Toto ? - Parce que la maîtresse m’a passé un savon !",
		},
		{
			description:
				"Toto va à la boulangerie. Le boulanger dit à Toto :- Aujourd’hui, le deuxième pain au chocolat est offert! - Alors, donnez-moi juste le deuxième.",
		},
	];

	const tableauDarkhaa = [
		{
			description:
				"Un fils demande à son pére: -Papa! C'est quoi un alcoolique? -Hé bien un  alcoolique, c'est quelqu'un qui va voir les choses en double. Tu vois par exemple ces 4 arbres là bas? L'alcoolique lui en verra 8. -Mais papa, il n'y a que 2 arbres",
		},
		{
			description:
				"C'est un gars qui entre dans bar en marchant sur les mains. Il réussit à s'assoir péniblement et commande une bière. Ce dernier lui demande :10 h 17 -pourquoi marchez-vous sur les mains? -C'est ma femme , elle m'a dit de ne plus poser un pied dans un bar!",
		},
		{
			description:
				"Hier soir, j'étais tellement bourré que quand j'ai traversé la piste de danse pour aller aux toilettes, j'ai gagné le concours de danse.",
		},
		{
			description:
				"Quelle est la différence entre la bière et l'urine ? Environ un quart d'heure. ",
		},
		{
			description:
				"Chérie, je bois un verre avec mes potes. Si je ne suis pas là dans 30 minutes, RELIS CE MESSAGE !",
		},
	];

	return (
		<>
			<header className="header">
				<h1 className="title">Les blagues des Wild-Parces</h1>
				<h3>Rigole avec nous</h3>
				<span>choisis ton type de blague</span>
			</header>
			<main>
				<section className="section">
					<BoutonCed tableau={tableauCed} textebouton="Blagues de Cédric" />
					<BoutonCed
						tableau={tableauAngelica}
						textebouton="Blagues d'Angelica"
					/>
					<BoutonCed tableau={tableauAlex} textebouton="Blagues d'Alexandre" />
					<BoutonCed
						tableau={tableauDarkhaa}
						textebouton="Blagues de Darkhaa"
					/>
				</section>
			</main>
			<footer>
				<p>© Team Parces 2024: Angelica, Alexandre, Cédric, Darkhaa</p>
			</footer>
		</>
	);
}
export default App;
