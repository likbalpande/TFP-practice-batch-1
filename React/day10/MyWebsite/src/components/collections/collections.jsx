import { useEffect, useRef, useState } from "react";
import { restaurantsData } from "../../constants/restaurantsData";
import styles from "./collections.module.css";
import RestaurantCard from "./restaurantCard/restaurantCard";
import { useNavigate } from "react-router";

const Collections = () => {
    const navigate = useNavigate();
    const cardRef = useRef();
    const [selectedCard, setSelectedCard] = useState(0);

    const handleClick = (restaurantName) => {
        const newRestaurantName = restaurantName.replace(/ /g, "-");
        console.log(restaurantName);
        navigate(`/view/${newRestaurantName}`);
    };

    const handleCardScroll = (e) => {
        console.log("🟡 : e:", typeof e.target.value);
        setSelectedCard(e.target.value);
    };

    console.log(selectedCard);

    useEffect(() => {
        console.log("🟡 : cardRef:", cardRef);
        cardRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }, [selectedCard]);

    return (
        <div className={styles.main_container}>
            <select onChange={handleCardScroll}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            {restaurantsData.map((elem, idx) => (
                <RestaurantCard
                    ref={cardRef}
                    idx={idx}
                    selectedCard={selectedCard}
                    key={elem.address}
                    handleClick={handleClick}
                    {...elem}
                />
            ))}
        </div>
    );
};

export default Collections;
