import { useLoaderData } from "react-router-dom";
import styles from "./ProjetPage.module.scss";

export default function ProjetPage() {
  const repos = useLoaderData();
  console.log(repos);

  return (
    <div className={styles.projetPage}>
      <h1 className={styles.title}>{repos.name}</h1>
      <p className={styles.description}>
        {repos.description || "Aucune description fournie."}
      </p>

      {repos.avatarUrl && (
        <div className={styles.owner}>
          <img
            src={repos.avatarUrl}
            alt={`${repos.ownerLogin} avatar`}
            className={styles.avatar}
          />
          <p>
            Créé par :{" "}
            <a
              href={repos.owner.html_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repos.ownerLogin}
            </a>
          </p>
        </div>
      )}

      <div className={styles.details}>
        <h2>Détails du Repository</h2>
        <ul>
          <li>
            <strong>Langage principal :</strong>{" "}
            {repos.language || "Non spécifié"}
          </li>
          <li>
            <strong>Stargazers (⭐) :</strong> {repos.stargazers_count}
          </li>
          <li>
            <strong>Licence :</strong>{" "}
            {repos.license?.name || "Aucune licence spécifiée"}
          </li>
          <li>
            <strong>Créé le :</strong>{" "}
            {new Date(repos.created_at).toLocaleDateString()}
          </li>
          <li>
            <strong>Dernière mise à jour :</strong>{" "}
            {new Date(repos.updated_at).toLocaleDateString()}
          </li>
          <li>
            <strong>Visibilité :</strong> {repos.visibility}
          </li>
        </ul>
      </div>

      <div className={styles.links}>
        <a
          href={repos.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Voir le repository sur GitHub
        </a>
      </div>

      <div className={styles.topics}>
        <h2>Topics</h2>
        {repos.topics && repos.topics.length > 0 ? (
          <ul>
            {repos.topics.map((topic) => (
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
