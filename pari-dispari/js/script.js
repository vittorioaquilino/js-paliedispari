// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo all'utente di scegliere pari o dispari
let oddOrEven;
do {
    oddOrEven = (prompt("scegli pari o dispari").toLocaleLowerCase());
    console.log("scelto:", oddOrEven);
} while (oddOrEven !== "pari" && oddOrEven !== "dispari")

// chiedo di inserire un numero da 1 a 5
const userNumber = parseInt(prompt("inserisci un numero"));
console.log("numero utente:", userNumber);

const randNumber = generateRandomNumber(1, 5);
const theWinner = theWinneris(userNumber, randNumber);
console.log(theWinner);

// creo la funzione per il numero random
/**
 * Description
 * @param {any} min //-> number minimum
 * @param {any} max //-> number maximum
 * @returns {any} result of sum
 */
function generateRandomNumber(min, max) {
    // genero il numero per il computer
    let randNumber = Math.floor(Math.random() * (max - min + 1) ) + min; 
    console.log("numero computer:", randNumber);
    return randNumber;
}

// creo la funzione per stabilire chi ha vinto
/**
 * Description
 * @param {any} winner -> 
 * @returns {any} result of the winner of game
 */
function theWinneris(num1, num2) {
    let result = "";
    let sumNumber = num1 + num2;
    console.log("la somma è:", sumNumber);

    if (oddOrEven === "pari" && sumNumber % 2 == 0) {
        result = "hai vinto tu";
    } else if (oddOrEven === "dispari" && sumNumber % 2 !== 0) {
        result = "hai vinto tu";
    } else {
        result = "hai perso!";
    }

    return result;
}