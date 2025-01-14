import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* <h1>{name}</h1>
            <h1>{email}</h1> */}
            <Link to="/search">Go to search page</Link>
        </div>
    );
};

export default Home;
