import { useState } from "react";
import Button from "../../components/Button/button";
import Navbar from "../../components/navbar/navbar";
import styles from "./loginPage.module.css";

// re-rendering === re-run the function/component
// 1. normal variable when changed: does not cause re-rendering
// 2. normal variable during re-rendering : reset
// state variable : tackles: 1, 2
const LoginPage = () => {
    // let name = "Ajay";
    const [name, setName] = useState("Ajay");
    console.log("entry", name);

    function handleChange(e) {
        // name = e.target.value;
        // console.log(name);
        setName(e.target.value);
    }

    function postDetails() {
        fetch("https://dummyjson.com/users/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName: name,
                lastName: "Kuchbhi",
                age: 25,
                /* other user data */
            }),
        })
            .then((res) => res.json())
            .then(console.log);
    }

    return (
        <div className={styles.main_container}>
            <Navbar page="Login" />
            <h1>Login {name}</h1>
            {/* <form className={styles.form}> */}
            <div className={styles.inputContainer}>
                <label>Name:</label>
                <input type="text" value={name} onChange={handleChange} />
            </div>
            <Button type="primary" disabled={name.length === 0} onClick={postDetails}>
                Proceed
            </Button>
            <Button type="tertiary">Forgot password?</Button>
            {/* </form> */}
        </div>
    );
};

export default LoginPage;
