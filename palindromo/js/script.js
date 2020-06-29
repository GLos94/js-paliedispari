// var parola = prompt("Inserisci una parola");
// console.log(parola);
//
// // analizza la stringa trasformando i singoli caratteri in array
// var caratteriParola = parola.split("");
// console.log(caratteriParola);
//
// // inverti i caratteri dell'array appena formato
// var caratteriParolaInversa = caratteriParola.reverse("");
// console.log(caratteriParolaInversa);
//
// // crea una nuova stringa che sarà la parola inversa
// var parolaInversa = caratteriParolaInversa.join("");
// console.log(parolaInversa);
//
// // confronta le due stringhe
// if (parola == parolaInversa) {
//   console.log("La parola inserita è palindroma");
// } else {
//   console.log("La parola inserita NON è palindroma");
// }


var parola = prompt("Inserisci una parola");
var parolaInversa;


if (parola == parolaInversa) {
  console.log("La parola inserita è palindroma");
} else {
  console.log("La parola inserita NON è palindroma");
}

function checkPalindrom(parola, caratteriParola, caratteriParolaInversa, parolaInversa) { //function that checks if palindrome or not
    caratteriParola = parola.split("");
    caratteriParolaInversa = caratteriParola.reverse("");
    parolaInversa = caratteriParolaInversa.join("");
    return parolaInversa;
}
