import Button from "../../components/Button/button";
import Navbar from "../../components/navbar/navbar";
import styles from "./loginPage.module.css";

const LoginPage = () => {
    return (
        <div className={styles.main_container}>
            <Navbar page="Login" />
            <h1>Login</h1>
            <Button type="primary" disabled={true}>
                Proceed
            </Button>
            <Button type="tertiary">Forgot password?</Button>
        </div>
    );
};

export default LoginPage;
