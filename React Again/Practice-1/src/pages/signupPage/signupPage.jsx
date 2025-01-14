import Navbar from "../../components/navbar/navbar";
import styles from "./signupPage.module.css";

const SignupPage = () => {
    return (
        <div className={styles.main_container}>
            <Navbar page="Signup" />
            <h1>Signup</h1>
        </div>
    );
};

export default SignupPage;
