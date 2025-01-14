import { useState } from "react";
import styles from "./navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { email, name } = useSelector((e) => e.auth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <h1 className={styles.logo}>My App</h1>
                <button className={styles.menuToggle} onClick={toggleMenu}>
                    {isMenuOpen ? "Close" : "Menu"}
                </button>
                <ul className={styles.menu}>
                    {isMenuOpen && (
                        <>
                            <li>
                                <a href="/">
                                    Hello {name}({email}) !
                                </a>
                            </li>
                            <li>
                                <button>Logout</button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
