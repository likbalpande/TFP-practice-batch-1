import { useParams } from "react-router-dom";
import { restaurantsData } from "../constants/restaurantsData";
import Navbar from "../components/navbar";

const RestaurantInfo = () => {
    const { restaurantName } = useParams();
    const { address } = restaurantsData.find(({ name }) => {
        if (name.replace(/ /g, "-") === restaurantName) return true;
        return false;
    });
    return (
        <div>
            <Navbar />
            <h1>{restaurantName}</h1>
            <h1>{address}</h1>
            <br />
        </div>
    );
};

export default RestaurantInfo;
