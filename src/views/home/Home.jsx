import backgroundHomeImg from "../../assets/images/background_img_home.webp";
import styles from "./Home.module.scss";

const Home = () => {
  const handleHomeClick = () => {
    // Add your click handling logic here
    // console.log("Home background clicked");
  };
  return (
    <div className={styles.container_home}>
      
      <div className={styles.background_container} onClick={handleHomeClick}>
        <img
          src={backgroundHomeImg}
          alt="backgroundHomeImg"
        />
      </div>

      <div className={styles.homeContent}>
        <h1 className="title">Bienvenue sur mon Portfolio</h1>
        <p>Je suis Nicoleta Esanu-Desbois, développeuse web junior.</p>
        <p>
          Après une expérience professionnelle de 19 ans dans le secteur de
          l'administration des ventes, du commerce et l'export, j'ai décidé de
          me reconvertir dans le développement web. J'ai suivi une formation
          intensive au sein de l'organisme de formation Openclassrooms, reconnu
          pour la qualité et le sérieux des formations professionnelles et d'une
          belle notoriété dans le monde des formations digitales.{" "}
        </p>
        <p>
          {" "}
          A la suite de cette formation, qui m'a permis d'acquérir des
          compétences solides en développement web, souhaitant donner à ma
          carrière une direction tournée vers le digital, j'ai le plaisir de
          vous faire part de mon souhait de poursuivre ma carrière au sein de
          votre société en tant que Développeur web. J’ai acquis des compétences
          opérationnelles et une connaissance de divers langages techniques et
          méthodologies recherchés, qui me permettront d’être rapidement
          efficace.
        </p>
        <p>
          Je suis passionnée par le développement web et je suis convaincue que
          mon profil peut être un atout pour votre entreprise. Je suis une
          personne dynamique, autonome, rigoureuse, organisée, et j'ai un bon
          relationnel. Je suis également curieuse, créative, et j'aime apprendre
          de nouvelles choses.{" "}
        </p>
        <p>
          Je vous invite à découvrir mes projets et à me contacter pour toute
          information complémentaire.
        </p>
      </div>

    </div>
  );
};

export default Home;
