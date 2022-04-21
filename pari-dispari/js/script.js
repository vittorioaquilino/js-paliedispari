// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo all'utente di scegliere pari o dispari
const oddOrEven = prompt("scegli pari o dispari");
console.log("scelto:", oddOrEven);

// chiedo di inserire un numero da 1 a 5
const userNumber = parseInt(prompt("inserisci un numero"));
console.log("numero utente:", userNumber);

const sumNumber = generateRandomNumber(1, 5);

const thewinner = theWinneris(sumNumber);

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

    // faccio la somma dei 2 numeri
    let sum = userNumber + randNumber;
    console.log("somma:", sum);

    return sum;
}

// creo la funzione per stabilire chi ha vinto
/**
 * Description
 * @param {any} winner -> 
 * @returns {any} result of the winner of game
 */
function theWinneris(winnerIs) {
    if (oddOrEven === sumNumber) {
        result = "hai vinto tu";
    } else {
        result = "ha vinto il computer";
    }
    console.log(result);
    return result;
}