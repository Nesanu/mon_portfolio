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
