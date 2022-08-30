import styles from "./styles/App.module.css";

import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PasswordInput from "./components/password-range/PasswordInput";
import PasswordOptions from "./components/password-options/PasswordOptions";
import PasswordScreen from "./components/password-screen/PasswordScreen";
import PasswordStrength from "./components/password-strength/PasswordStrength";

import { getRandomCharacters } from "./utils/getRandomCharacters";

import { FiArrowRight } from "react-icons/fi";

const App = () => {

  const initState = {
    uppercaseLetters: false,
    lowercaseLetters: false,
    numbers: false,
    symbols: false
  };

  const [options, setOptions] = useState(initState);
  const [passwordLength, setPasswordLength] = useState("");
  const [password, setPassword] = useState("");

  function generatePassword() {

    if (passwordLength < 8) {
      toast.info("Passwords longer than 8 digits are more secure!", { autoClose: 5000 });
    }

    let password = "";

    for (let i = password.length; i < passwordLength; i++) {
      const characters = getRandomCharacters(options);
      password += characters;
    }

    setPassword(password);

  }

  return (

    <div className={styles.container}>

      <h1>Password Generator</h1>

      <div className={styles.container__content}>

        <PasswordScreen password={password} />

        <div>

          <PasswordInput
            value={passwordLength}
            event={setPasswordLength}
          />

          <PasswordOptions
            values={options}
            event={setOptions}
          />

          <PasswordStrength
            values={options}
            passwordLength={passwordLength}
          />

          <button className={styles.generate__button}
            onClick={generatePassword}>
            <span>GENERATE</span>
            <FiArrowRight />
          </button>

        </div>

      </div>

      <ToastContainer
        autoClose={1000}
      />

    </div>

  );

};

export default App;