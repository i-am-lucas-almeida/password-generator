import styles from "../password-screen/Screen.module.css";

import { toast } from "react-toastify";

import { FaRegCopy } from "react-icons/fa";

const PasswordScreen = ({ password }) => {

    function copyPassword() {

        if (password.length === 0) return;

        navigator.clipboard.writeText(password);

        toast.success("Password copied!");

    }

    return (

        <div className={styles.password__screen}>

            <p className={`${password ? styles.active : styles.disable}`} title={password}>
                {password ? password : "P4$5W0rD!"}
            </p>

            <button className={styles.copy__button} onClick={copyPassword}>
                <FaRegCopy />
            </button>

        </div>

    );

};

export default PasswordScreen;