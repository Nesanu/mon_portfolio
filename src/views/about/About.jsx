import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.container}>
            <h1>Mon histoire</h1>
            <p>Ceci est la page About.</p>
            {/* TODO : Ajouter du contenu sur mon histoire */}
        </div>
    );
};

export default About;