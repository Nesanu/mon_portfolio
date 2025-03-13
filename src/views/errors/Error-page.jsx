import "./Error-pages.module.scss";  
import { Link, useRouteError } from "react-router-dom";


  /**
   * @module ErrorPage
   * @description
   * Ce composant représente une page d'erreur.
   * @returns {JSX.Element} - Une page d'erreur.
   * @example
   * <ErrorPage />
    */
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <section className="errorPage">
     
      <h1 className="errorTitle">{error.status}</h1>

      <p className="errorMessage">
        Oups! La page que vous demandez n&apos;existe pas. Veuillez vérifier
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
