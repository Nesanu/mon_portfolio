import styles from 'repoHeader.module.scss' // TODO: Importer le fichier de style
import PropTypes from 'prop-types';

export const RepoHeader = (repo) => {
  return (
    <>
      <h1 className={styles.title}>{repo.name}</h1>
      <p className={styles.description}>
        {repo.description || "Aucune description fournie."}
      </p>
    </>
  );
};
RepoHeader.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
};
  