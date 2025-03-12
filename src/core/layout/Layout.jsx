import PropTypes from "prop-types";
import styles from "./Layout.module.scss";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";

export const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.mainContent}>{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;