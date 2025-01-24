import { Link } from "react-router";
import styles from "./navbar.module.css";
import PropTypes from "prop-types";

const Navbar = ({ userInfo }) => {
    const { isAuthenticated, user } = userInfo;
    const { name, email } = user || {};
    // let location = useLocation();
    // console.log(location);
    return (
        <div className={styles.main}>
            <div className={styles.left_side}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
            <div className={styles.right_side}>
                {isAuthenticated ? (
                    <label>
                        Hello {name}! ({email})
                    </label>
                ) : (
                    <label>Guest</label>
                )}
            </div>
        </div>
    );
};

Navbar.propTypes = {
    userInfo: PropTypes.object.isRequired,
};

export default Navbar;
