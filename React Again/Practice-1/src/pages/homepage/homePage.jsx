import Navbar from "../../components/navbar/navbar";
import styles from "./homePage.module.css";

const Homepage = () => {
    return (
        <div className={styles.main_container}>
            <Navbar page="Home" />
            <h1>Homepage</h1>
        </div>
    );
};

export default Homepage;
