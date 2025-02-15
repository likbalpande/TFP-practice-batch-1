import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ type, children, disabled, onClick }) => {
    return (
        <button
            className={`${styles.basic_button} ${styles[type]} ${disabled === true ? styles.disabled : ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
