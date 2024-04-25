import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const LandingPage = () => {
    return (
        <div className={styles.landing_container}>
            <div className={styles.landing_content}>
                <div className={styles.left}>
                    <h1>Welcome to Plain Hub</h1>
                    <p>A platform to connect with others.</p>
                    <div className={styles.buttons_container}>
                        <Link to="/login">
                            <button className={styles.green_btn}>Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className={styles.white_btn}>Signup</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
