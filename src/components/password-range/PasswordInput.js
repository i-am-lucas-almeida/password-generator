import styles from "../password-range/Input.module.css";

const PasswordRange = ({ value, event: setPasswordLength }) => {

    return (

        <div className={styles.container}>

            <p>Password Length</p>

            <input
                type="text"
                value={value}
                maxLength={2}
                placeholder="00"
                onChange={(e) => setPasswordLength(e.target.value)}
                className={styles.password__input}
            />

        </div>

    );

};

export default PasswordRange;