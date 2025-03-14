import React, { useEffect, useState } from "react";
import styles from "./ProjetsPage.module.scss";
import { getUserRepos } from "../../services/githubService.js";
import { Loader } from "../../components/loader/loader.jsx";
import { Card } from "../../components/projets/repoCard/cards.jsx";

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
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        }

        fetchRepos();
    }, []);

    if (loading) return <Loader />;

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
                    <Card repo={repo} key={repo.id} />
                ))}
            </div>
        </div>
    );
}