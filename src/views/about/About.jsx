import styles from './About.module.scss';
import Collapse from '../../components/collapse/Collapse.jsx';
import PropTypes from 'prop-types';


  /**Documentation de méthode 
   * @URL : Localhost:PORT/about
   * @description Composant JSX pour la vue 'About'
   * @return : JSX Component
   * @example
   * <About />
  */
export default function About() {

	const aboutDatas = [
		{
			"id": "1",
			"title": "Formation et expériences",
			"content": "Après 19 années d’expérience dans l’administration des ventes, le commerce et l’export, où j’ai exercé en tant que gestionnaire et commerciale export au sein de plusieurs entreprises, j’ai choisi d’opérer une transition vers le développement web. Cette reconversion professionnelle s’est concrétisée par une formation intensive professionnalisante dispensée par OpenClassrooms, un organisme réputé pour la rigueur et la qualité de ses parcours pédagogiques, ainsi que pour sa solide réputation dans le domaine de la formation numérique. Cette formation m’a permis d’acquérir des compétences solides en développement web, et de me spécialiser dans le front-end."
		}, 
		{
			"id": "2",
			"title": "Soft skills",
			"content": "Je souhaite mettre à profit et au service de votre entreprise mon savoir-faire, mon organisation, mon aisance relationnelle, mon intégrité, mon dynamisme, ma capacité d’adaptation, mon sens de l'écoute et de compréhension de besoins complexes, ma combativité, ma persévérance, ma réactivité, ma rigueur et mon endurance."
		},
		{
			"id": "3",
			"title": "Compétences",
			"content": "J’ai acquis des compétences opérationnelles, une maîtrise des technologies et une connaissance de divers langages techniques et méthodologies recherchés, qui me permettront d’être rapidement efficace. J’ai pu également développer d’excellentes capacités d’analyse et de synthèse, ainsi qu’un goût certain pour le travail en équipe."
		},
		{
			"id": "4",
			"title": "Outils et méthodes",
			"content": "Je suis à l’aise avec les outils de développement web tels que Visual Studio Code, Git, GitHub, les outils de gestion de projet comme Trello, les méthodes agiles, les langages HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, les bases de données, les outils de design comme Figma, les outils de déploiement comme Github Pages, Vercel, les outils de performance comme Lighthouse, les outils de SEO comme Google Analytics, Google Search Console, les outils de versionning comme Git, GitHub."
		},
		{
			"id": "5",
			"title": "Mes objectifs",
			"content": "À court terme, mon objectif est d’achever ma formation et d’intégrer une entreprise, une ESN ou une startup. Je souhaite rejoindre une équipe de passionnés qui me permettra de développer aussi bien mes compétences techniques que mes aptitudes transversales. Sur le long terme, je vise à devenir une spécialiste du front en particulier des API et à maîtriser des frameworks comme Angular et d'autres langages comme Ruby. Je suis actuellement en recherche active d’un poste de développeuse web junior."
		}
	]
 /**Documentation de méthode 
  * @description
  * On map les données de la variable aboutDatas.
  * @param {object} aboutDatas - Les données de la page 'About'
  * @param {string} aboutDatas.id - L'id de la section
  * @param {string} aboutDatas.title - Le titre de la section
  * @param {string} aboutDatas.content - Le contenu de la section
  * @returns {JSX.Element} - Retourne le JSX de la page 'About'
  * @example
  * <About />
  */
	return (    
		<div className={styles.about}>
			<div className={styles.about_main}>
				{aboutDatas.map(data => {
					return (
						<div key={data.id} className={styles.about_main_collapse}>
							<Collapse style={{margin:'30px 0'}}  title={data.title} content={data.content} />
						</div>
					)}
				)}
			</div>
		</div>
	)
}

About.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	id: PropTypes.string,
};


// Exemple de la page About
// // const About = () => {
//     return (
//         <div className={styles.container}>
//             <h1>Mon histoire</h1>
//             <p>Ceci est la page About.</p>
//             {/: Ajouter du contenu sur mon histoire */}
//         </div>
//     );
// };