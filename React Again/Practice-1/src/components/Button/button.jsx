import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ type, children, disabled }) => {
    return (
        <button className={`${styles.basic_button} ${styles[type]} ${disabled === true ? styles.disabled : ""}`}>
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;
