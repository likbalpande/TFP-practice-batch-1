import zomatoLogo from "/zomato-logo.avif";
import "./navbar.css";
import Button from "./button";
import { RiUserFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-main-container">
            <Link to="/">
                <img className="zomato-logo" src={zomatoLogo}></img>
            </Link>
            <div className="right-nav">
                <Button>Use App</Button>
                <Button className="icon-primary">
                    <RiUserFill />
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
