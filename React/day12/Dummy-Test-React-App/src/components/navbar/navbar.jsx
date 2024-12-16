import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import { routesConstants } from "../../constants/routes";
import PropTypes from "prop-types";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

const Navbar = ({ titleSuffix }) => {
    const { auth } = useContext(AuthContext);
    const { pathname } = useLocation();
    return (
        <div className={styles.main}>
            <h2>Customer CRM {titleSuffix}</h2>
            <div className={styles.link_container}>
                {routesConstants.map(({ path, title }) => {
                    if (pathname === path) {
                        return null;
                    } else {
                        return (
                            <Link key={title} to={path}>
                                {title}
                            </Link>
                        );
                    }
                })}
                <label>{auth.username}</label>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    titleSuffix: PropTypes.string,
};

export default Navbar;

// App.jsx (data, setData)
// |- Home.jsx (data)
// | --- Navbar (data)
// |- Login.jsx (data)
// | --- Navbar (data)
// |- Signup.jsx (data)
// | --- Navbar (data)
