import {NavLink, useNavigate} from "react-router-dom";
import styles from "./Header.module.scss";
import portraitImg from "../../../assets/images/portrait_Nicoleta.png"; // TODO : inséré une image !²


const Header = () => {
    const navigate = useNavigate()
    
    const handleHomeClick = () => {
        navigate('/')
    }
    return (
        <header className={styles.header}>
            <div className={styles.nav_header} onClick={handleHomeClick}>
<img src={portraitImg} alt="Nicoleta profil" className={styles.nav_header_img}/>

                {/* <img src="#!" alt="Nicoleta profil" className={styles.nav_header_img}/>  */}
                {/* TODO : inséré une image ! */}
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? styles.active : undefined}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? styles.active : undefined}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? styles.active : undefined}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projets"
                            className={({ isActive }) => isActive ? styles.active : undefined}
                        >
                            Projets
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;