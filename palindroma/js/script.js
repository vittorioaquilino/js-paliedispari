// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiedo all'utente di inserire una parola
const userWord = prompt("inserisci una parola");
console.log("parola inserita:", userWord);

// creo la variabile del risultato
let result = false;

let word = palindroma(userWord);
// controllo se la parola è palindroma
if (word === userWord) {
    result = true;
}
console.log(result);

/**
 * Description the word must be the same by reversting the letters
 * @param {any} wordCheck //-> is the word to be reversting
 * @returns {any} 
 */

// creo la funzione
function palindroma(wordCheck) {
    let wordReverse = '';
    for (let i = wordCheck.length - 1; i >= 0; i--) {
        wordReverse += wordCheck[i];
    }

    console.log("risultato:", wordReverse);
    return wordReverse;
}
