import "./button.css";
import PropTypes from "prop-types";

const Button = ({ children, className = "", onClick }) => {
    return (
        <button className={`ui-component-button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
