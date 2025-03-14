import styles from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>Chargement des projets...</p>
    </div>
  );
};
