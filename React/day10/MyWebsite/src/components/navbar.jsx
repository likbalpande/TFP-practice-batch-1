import zomatoLogo from "/zomato-logo.avif";
import "./navbar.css";
import Button from "./button";
import { RiUserFill } from "react-icons/ri";
import { useEffect, useState } from "react";

const getRandom = () => {
    const val = Math.floor(Math.random() * 10) % 4;
    console.log("new Value", val);
    return val;
};

const Navbar = () => {
    const [counter, setCounter] = useState(getRandom);

    // const handleClick = () => {
    //     setCounter(counter + 1);
    //     setCounter(counter + 1);
    //     setCounter(counter + 1);

    //     setCounter((prev) => {
    //         return prev + 1;
    //     }); // Noted ! : schedule
    //     setCounter((prev) => {
    //         return prev + 1;
    //     }); // Noted ! : schedule
    //     setCounter((prev) => prev + 1); // Noted ! : schedule
    // };

    const handleClick = () => {
        setCounter(getRandom);
    };

    let value = "";
    switch (counter) {
        case 0:
            value = "zero";
            break;
        case 1:
            value = "one";
            break;
        case 2:
            value = "two";
            break;
        case 3:
            value = "three";
    }

    useEffect(() => {
        console.log("rendered!");
    }, [counter]);

    return (
        <div className="navbar-main-container">
            <img className="zomato-logo" src={zomatoLogo}></img>
            {value}:{counter}
            <div className="right-nav">
                <Button onClick={handleClick}>Use App</Button>
                <Button className="icon-primary">
                    <RiUserFill />
                </Button>
            </div>
        </div>
    );
};

export default Navbar;
