import styles from "../password-options/Options.module.css";

import PasswordCheckbox from "./PasswordCheckbox";

const PasswordOptions = ({ values: options, event: setOptions }) => {

    const { uppercaseLetters, lowercaseLetters, numbers, symbols } = options;

    function handleChange(e) {

        const { name, checked } = e.target;
        setOptions({ ...options, [name]: checked });

    }

    return (

        <div className={styles.container}>

            <PasswordCheckbox
                name="uppercaseLetters"
                checked={uppercaseLetters}
                handleChange={handleChange}
                label="Include Uppercase Letters"
            />

            <PasswordCheckbox
                name="lowercaseLetters"
                checked={lowercaseLetters}
                handleChange={handleChange}
                label="Include Lowercase Letters"
            />

            <PasswordCheckbox
                name="numbers"
                checked={numbers}
                handleChange={handleChange}
                label="Include Numbers"
            />

            <PasswordCheckbox
                name="symbols"
                checked={symbols}
                handleChange={handleChange}
                label="Include Symbols"
            />

        </div>

    );

};

export default PasswordOptions;