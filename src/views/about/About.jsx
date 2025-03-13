import style from './About.module.scss';
import Collapse from '../../components/collapse/Collapse.jsx';
import PropTypes from 'prop-types';

// const About = () => {
//     return (
//         <div className={styles.container}>
//             <h1>Mon histoire</h1>
//             <p>Ceci est la page About.</p>
//             {/* TODO : Ajouter du contenu sur mon histoire */}
//         </div>
//     );
// };

// export default About;

// import './style.scss';
// import { Banner } from '../../components/banner/banner';
// import Collapse from '../../components/collapse/Collapse';
// import PropTypes from 'prop-types';


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
			"title": "Fiabilité",
			"content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
		},
		{
			"id": "2",
			"title": "Respect",
			"content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
		},
		{
			"id": "3",
			"title": "Service",
			"content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.."
		},
		{
			"id": "4",
			"title": "Sécurité",
			"content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
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
		<div className='about'>
            {/* <Banner bannerType="about"/> */}
			<div className='about_main'>
				{aboutDatas.map(data => {
					return (
						<div key={data.id} className="about_main_collapse">
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