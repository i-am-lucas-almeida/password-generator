// get a random character

export function getUpperLetters() {
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

export function getLowerLetters() {
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

export function getNumbers() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
}

export function getSymbols() {
    const symbols = "/!@#$%&^*+-=_";
    return symbols[Math.floor(Math.random() * symbols.length)];
}