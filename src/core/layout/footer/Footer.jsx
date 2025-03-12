import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} - Mon Portfolio</p>
        </footer>
    );
};

export default Footer;