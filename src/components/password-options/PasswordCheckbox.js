import styles from "../password-options/Options.module.css";

const PasswordCheckbox = ({ label, name, checked, handleChange }) => {

    return (

        <div className={styles.checkbox}>

            <label>

                <input
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={handleChange}
                />

                <div className={`${styles.checkbox__box} ${checked && styles.isChecked__checkbox}`}></div>

                <p className={`${checked && styles.isChecked__p}`}>
                    {label}
                </p>

            </label>

        </div>

    );

};

export default PasswordCheckbox;