import "./Error-pages.module.scss";  
import { Link } from "react-router-dom";


  /**
   * @module ErrorPage
   * @description
   * Ce composant représente une page d'erreur.
   * @returns {JSX.Element} - Une page d'erreur.
   * @example
   * <ErrorPage />
    */
export default function ErrorPage({context}) {

  return (
    <section className="errorPage">
     
      <h1 className="errorTitle">Page indisponible</h1>

      <p className="errorMessage">
        {!context ? "contextOups! La page que vous demandez n&apos;existe pas. Veuillez vérifier" : context}
      </p>
      <Link to="/" className="errorRedirection">
        Retourner sur la page d&apos;accueil
      </Link>
    </section>
  );
}


 /**Documentation de méthode 
  * @description
  * 
  * Syntaxe de la méthode SCSS classique: 
  * import styles from "./Host.module.scss";
  * <div className={styles.owner}>
  * Nom file SCSS correspondant: Host.module.scss
  * 
  * Syntaxe de la méthode SCSS module (localisée):
  * import "./Host.scss";
  * <div className="owner">
  * Nom file SCSS correspondant: Host.scss
*/
