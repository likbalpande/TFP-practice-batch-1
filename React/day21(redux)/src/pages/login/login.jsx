import { useDispatch, useSelector } from "react-redux";
import { login, setEmail, setName, setPassword } from "../../store/slices/authSlice";
import styles from "./login.module.css";

const Login = () => {
    const dispatch = useDispatch();
    const { email, name, password } = useSelector((e) => e.auth);
    const handleSubmit = () => {
        if (email == "") {
            alert("Invalid email");
        } else if (name == "") {
            alert("Invalid name");
        } else if (password == "") {
            alert("Invalid password");
        } else {
            dispatch(login());
        }
    };

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    // value={name}
                    onChange={(e) => dispatch(setName(e.target.value))}
                    className={styles.input}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    // value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                    className={styles.input}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    // value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                    className={styles.input}
                />
            </div>
            <button className={styles.button} onClick={handleSubmit}>
                Login
            </button>
        </div>
    );
};

Login.propTypes = {};

export default Login;
