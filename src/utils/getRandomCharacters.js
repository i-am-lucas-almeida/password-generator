import { shuffleArray } from "./ShuffleArray";

import {
    getUpperLetters,
    getLowerLetters,
    getNumbers,
    getSymbols
} from "./PasswordCharacters";

export function getRandomCharacters(options) {

    const { uppercaseLetters, lowercaseLetters, numbers, symbols } = options;

    const passwordCharacters = [];

    if (uppercaseLetters === true) {
        passwordCharacters.push(getUpperLetters());
    }

    if (lowercaseLetters === true) {
        passwordCharacters.push(getLowerLetters());
    }

    if (numbers === true) {
        passwordCharacters.push(getNumbers());
    }

    if (symbols === true) {
        passwordCharacters.push(getSymbols());
    }

    if (passwordCharacters.length === 0) return "";

    return shuffleArray(passwordCharacters)[Math.floor(Math.random() * passwordCharacters.length)];

}