import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Pages</h1>
            <Link to="/dining-out">Dining Out</Link>
            <br />
            <Link to="/delivery">Delivery</Link>
        </div>
    );
};

export default Home;
