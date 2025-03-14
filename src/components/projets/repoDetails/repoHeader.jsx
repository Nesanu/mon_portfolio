import styles from 'repoHeader.module.scss' // TODO: Importer le fichier de style
import PropTypes from 'prop-types';
export const RepoHeader = (repo) => {
  return (
    <>
      <h1 className={styles.title}>{repos.name}</h1>
      <p className={styles.description}>
        {repos.description || "Aucune description fournie."}
      </p>
    </>
  );
};

// :TODO : Ajouter les propTypes   