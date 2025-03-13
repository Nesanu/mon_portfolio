import React, { useEffect, useState } from "react";
import styles from "./ProjetsPage.module.scss";
import { getUserRepos } from "../../services/githubService.js";
import { Link } from "react-router-dom"; // Import du fichier SCSS pour le style

export default function ProjetsPage() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryAfter, setRetryAfter] = useState(null); // Temps restant avant de refaire des requêtes

    useEffect(() => {
        async function fetchRepos() {
            try {
                setLoading(true);
                const response = await getUserRepos();

                if (response.status === 403) {
                    // Limite atteinte
                    setError(response.message);
                    setRetryAfter(response.retryAfter); // Définir le temps restant pour la réinitialisation
                } else if (response.data) {
                    setRepos(response.data); // Stocker les repositories
                    setError(null); // Effacer les erreurs précédentes
                } else {
                    setError("Impossible de charger les repositories.");
                }
            } catch (err) {
                setError("Une erreur est survenue. Veuillez réessayer plus tard.");
            } finally {
                setLoading(false);
            }
        }

        fetchRepos();
    }, []);

    if (loading) return <p className={styles["loading"]}>Chargement des projets...</p>;

    if (error) {
        return (
            <div>
                <p className={styles["error"]}>{error}</p>
                {retryAfter && (
                    <p>
                        Merci de patienter encore <strong>{retryAfter}</strong> secondes
                        avant de pouvoir effectuer une nouvelle tentative.
                    </p>
                )}
            </div>
        );
    }
    
    

    return (
        <div className={styles["projets-page"]}>
            <h1 className={styles.title}>Mes Projets GitHub</h1>
            <div className={styles["repos-container"]}>
                {repos.map((repo) => (
                    <div className={styles.card} key={repo.id}>
                        <h2 className={styles["repo-name"]}>{repo.name}</h2>
                        <p className={styles["repo-description"]}>
                            {repo.description ? repo.description : "Aucune description."}
                        </p>
                        <div className={styles["repo-info"]}>
                            <span className={styles.language}>{repo.language}</span>
                            <span className={styles.stars}>
                                ⭐ {repo.stargazers_count} Stars
                            </span>
                        </div>
                        <div className={styles["buttons"]}>
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles["repo-link"]}
                            >
                                Voir le projet
                            </a>
                            <Link
                                to={`${repo.name}`}
                                className={styles["repo-link"]}
                            >
                                En savoir plus
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}