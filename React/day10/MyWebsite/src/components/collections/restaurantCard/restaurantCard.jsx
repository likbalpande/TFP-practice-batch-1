import PropTypes from "prop-types";
import styles from "./restaurantCard.module.css";
import { FaStar } from "react-icons/fa";
import { forwardRef } from "react";

const RestaurantCard = forwardRef(
    ({ selectedCard, idx, imageSrc, name, address, cuisines, opensAt, rating, handleClick }, ref) => {
        return (
            <div
                ref={selectedCard == idx ? ref : null}
                className={styles.main_container}
                onClick={() => handleClick(name)}
            >
                <div className={styles.image_container}>
                    <img src={imageSrc} />
                </div>
                <div className={styles.info_container}>
                    <div className={styles.left_info}>
                        <h3>{name}</h3>
                        <h4>{cuisines.join(", ")}</h4>
                        <h5>{address}</h5>
                        <p>Opens at {opensAt}</p>
                    </div>
                    <div className={styles.right_info}>
                        <p>
                            {rating} <FaStar />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
);

RestaurantCard.displayName = "RestaurantCard";

RestaurantCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    cuisines: PropTypes.array.isRequired,
    opensAt: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    selectedCard: PropTypes.string,
    idx: PropTypes.number,
};

export default RestaurantCard;
