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
var parolaInversa = "";




function checkPalindrom(parola, caratteriParola, caratteriParolaInversa, parolaInversa) {
    caratteriParola = parola.split("");
    caratteriParolaInversa = caratteriParola.reverse("");
    parolaInversa = caratteriParolaInversa.join("");

    return parolaInversa;

}

console.log(checkPalindrom(parolaInversa));

  if (checkPalindrom == true) {
   console.log("la parola è palindroma");
 } else {
   console.log("la parola non è palindroma");
 }
