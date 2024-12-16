import styles from "./login.module.css";
import Navbar from "../../components/navbar/navbar";
import PropTypes from "prop-types";
import { useState } from "react";
const Login = ({ setData }) => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.dir(e.target);
        const obj = {};
        for (let i = 0; i < e.target.length - 1; i++) {
            const { name, value } = e.target[i];
            obj[name] = value;
        }
        setData(obj);
    };

    return (
        <div>
            <Navbar titleSuffix=" - LogIn" />
            <form onSubmit={handleSubmit}>
                <div className={styles.form_container}>
                    <h1>LogIn Hello {name}</h1>
                    <div className={styles.input_container}>
                        <label>Name</label>
                        {/* uncontrolled inputs */}
                        <input type="text" name="username" required></input>
                    </div>
                    <div className={styles.input_container}>
                        <label>Email</label>
                        {/* uncontrolled inputs */}
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className={styles.input_container}>
                        <label>Password</label>
                        {/* uncontrolled inputs */}
                        <input type="password" name="password"></input>
                    </div>
                    <button type="submit">Login {email}</button>
                </div>
            </form>
        </div>
    );
};

Login.propTypes = {
    setData: PropTypes.func.isRequired,
};

export default Login;
