import PropTypes from "prop-types";
import styles from "./input.module.css";

const Input = ({ type, placeholder, name, disabled }) => {
    return (
        <button
            className={`${styles.basic_button} ${styles[type]} ${disabled === true ? styles.disabled : ""}`}
        ></button>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Input;
