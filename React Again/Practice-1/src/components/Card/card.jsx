import styles from "../../pages/homepage/homePage.module.css";
import PropTypes from "prop-types";

const Card = ({ elem }) => {
    return (
        <div key={elem.title} className={styles.card}>
            <h4>{elem.title}</h4>
            <p>{elem.body}</p>
        </div>
    );
};

Card.propTypes = {
    elem: PropTypes.object,
};

export default Card;
