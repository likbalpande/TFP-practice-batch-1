import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ page }) => {
    const routes = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Login",
            link: "/login",
        },
        {
            title: "Signup",
            link: "/signup",
        },
    ];

    return (
        <div className={`${styles.main_container} ${styles.secondary}`}>
            {routes.map((elem) => {
                if (elem.title != page) {
                    return (
                        <Link key={elem.title} to={elem.link}>
                            {elem.title}
                        </Link>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
};

Navbar.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Navbar;
