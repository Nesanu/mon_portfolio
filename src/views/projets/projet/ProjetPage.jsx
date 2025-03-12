import {useLoaderData} from "react-router-dom";
import styles from "./ProjetPage.module.scss";

export default function ProjetPage() {
    const projet = useLoaderData();

    if (!projet || projet.error) {
        // Gestion des erreurs
        return (
            <div className={styles.error}>
                <h1>Erreur</h1>
                <p>
                    {projet?.message ||
                        "Impossible de charger les données du projet. Veuillez réessayer plus tard !"}
                </p>
            </div>
        );
    }

    // Validation supplémentaire pour les données nécessaires
    const owner = projet.owner || {};
    const avatarUrl = owner.avatar_url || ""; // Si `avatar_url` est manquant, utiliser une valeur par défaut
    const ownerLogin = owner.login || "Inconnu";


    return (
        <div className={styles.projetPage}>
            <h1 className={styles.title}>{projet.name}</h1>
            <p className={styles.description}>
                {projet.description || "Aucune description fournie."}
            </p>

            {avatarUrl && (
                <div className={styles.owner}>
                    <img
                        src={avatarUrl}
                        alt={`${ownerLogin} avatar`}
                        className={styles.avatar}
                    />
                    <p>
                        Créé par :{" "}
                        <a
                            href={owner.html_url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {ownerLogin}
                        </a>
                    </p>
                </div>
            )}


            <div className={styles.details}>
                <h2>Détails du Repository</h2>
                <ul>
                    <li>
                        <strong>Langage principal :</strong> {projet.language || "Non spécifié"}
                    </li>
                    <li>
                        <strong>Stargazers (⭐) :</strong> {projet.stargazers_count}
                    </li>
                    <li>
                        <strong>Forks :</strong> {projet.forks_count}
                    </li>
                    <li>
                        <strong>Issues ouvertes :</strong> {projet.open_issues_count}
                    </li>
                    <li>
                        <strong>Licence :</strong>{" "}
                        {projet.license?.name || "Aucune licence spécifiée"}
                    </li>
                    <li>
                        <strong>Créé le :</strong>{" "}
                        {new Date(projet.created_at).toLocaleDateString()}
                    </li>
                    <li>
                        <strong>Dernière mise à jour :</strong>{" "}
                        {new Date(projet.updated_at).toLocaleDateString()}
                    </li>
                    <li>
                        <strong>Visibilité :</strong> {projet.visibility}
                    </li>
                </ul>
            </div>

            <div className={styles.links}>
                <a
                    href={projet.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                >
                    Voir le repository sur GitHub
                </a>
            </div>

            <div className={styles.topics}>
                <h2>Topics</h2>
                {projet.topics && projet.topics.length > 0 ? (
                    <ul>
                        {projet.topics.map((topic) => (
                            <li key={topic} className={styles.topic}>
                                {topic}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun topic associé à ce repository.</p>
                )}
            </div>
        </div>
    );
}