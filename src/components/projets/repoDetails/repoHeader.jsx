import styles from './repoHeader.module.scss' ;
import PropTypes from 'prop-types';

export const RepoHeader = (repo) => {
  return (
    <>
      <h1 className={styles.title}>{styles.repo.name}</h1>
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
  