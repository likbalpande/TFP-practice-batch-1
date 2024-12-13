import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect } from "react";

const Navbar = ({ r }) => {
    console.log("--- --- ---> Navbar");

    // useEffect(() => {
    //     console.log("Navbar useEffect");
    // }, []);

    const handleChange = (e) => {
        const newValue = e.target.value;
        r(newValue); // --> Noted
    };

    return (
        <nav className="navbar-main-container">
            <h4>My Website</h4>
            <div className="search-box">
                <input onChange={handleChange} />
            </div>
            <div className="right">
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
            </div>
        </nav>
    );
};

export default Navbar;
