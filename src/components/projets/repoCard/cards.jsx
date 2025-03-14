import PropTypes from "prop-types";
import styles from "./cards.module.scss";
import { Link } from "react-router-dom";

export const Card = ({ repo }) => {
  return (
    <div className={styles.card} key={repo.id}>
      <h2 className={styles["repo-name"]}>{repo.name}</h2>
      <p className={styles["repo-description"]}>
        {repo.description ? repo.description : "Aucune description."}
      </p>
      <div>
        <div className={styles["repo-info"]}>
          <span className={styles.language}>{repo.language}</span>
          <span className={styles.stars}>⭐ {repo.stargazers_count} Stars</span>
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
          <Link to={`${repo.name}`} className={styles["repo-link"]}>
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    language: PropTypes.string,
    stargazers_count: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};
