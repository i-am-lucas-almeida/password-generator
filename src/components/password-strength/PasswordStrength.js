import styles from "../password-strength/Strength.module.css";

const PasswordStrength = ({ values }) => {

    const blocksColorized = [];
    const blocksDefault = [];
    let strengthName = "";
    let strengthColor = "";

    function counterStrength() {

        let counter = 0;

        Object.keys(values).forEach(function (item) {

            if (values[item] === true) {
                counter++;
                blocksColorized.push(item);
            } else {
                blocksDefault.push(item);
            }

        });

        if (counter === 0) return;

        if (counter === 1) {
            strengthName = "too weak!";
            strengthColor = "#F64A4A";
            return;
        }

        if (counter === 2) {
            strengthName = "weak";
            strengthColor = "#FB7C58";
            return;
        }

        if (counter === 3) {
            strengthName = "medium";
            strengthColor = "#F8CD65";
            return;
        }

        if (counter === 4) {
            strengthName = "strong";
            strengthColor = "#A4FFAF";
            return;
        }

    }

    counterStrength();

    return (

        <div className={styles.password__strength}>

            <h3>Strength</h3>

            <div>

                <p>{strengthName}</p>

                <ul className={styles.strength__container}>

                    {blocksColorized.map((item) => (

                        <li
                            key={item}
                            className={styles.strength__item}
                            style={{
                                backgroundColor: strengthColor,
                                borderColor: strengthColor
                            }}
                        />

                    ))}

                    {blocksDefault.map((item) => (

                        <li
                            key={item}
                            className={styles.strength__item}
                        />

                    ))}

                </ul>

            </div>

        </div>

    );

};

export default PasswordStrength;