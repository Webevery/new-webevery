import { signOut } from "next-auth/react";
import styles from "./LogoutBtn.module.scss";


const LogoutBtn = () => {
    return (
        <button className={styles.logoutBtn} onClick={signOut}>
            <svg className={styles.exitIcon}>
                <use href="/sprite.svg#icon-exit" />
            </svg>
        </button>
    );
};


export default LogoutBtn;