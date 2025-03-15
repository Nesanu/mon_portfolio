import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //@fortawesome/react-fontawesome
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; //fortawesome/free-solid-svg-icons


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} - Nicoleta Esanu-Desbois - Mon Portfolio </p>
            <div className={styles.social}>
                    <FontAwesomeIcon icon={faLinkedin} />
                <a href="www.linkedin.com/in/nicoleta-esanu-45b24440" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <FontAwesomeIcon icon={faGithub} />
                <a href="https://github.com/Nesanu/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;