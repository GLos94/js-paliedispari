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





// versione for


var parola = prompt("Inserisci una parola");
var parolaInversa = "";

if ((palindromo(parola)) == parola) {
  console.log("la parola è palindroma");
} else {
  console.log("la parola non è palindroma");
}


function palindromo(word) {
  for (var i = word.length - 1; i >= 0 ; i--) {
    parolaInversa += word[i] ;
  }
  return parolaInversa;
}



// versione split.reverse.join

// function checkPalindrom(parola) {
//     var caratteriParola = parola.split("");
//     var caratteriParolaInversa = caratteriParola.reverse("");
//     var parolaInversa = caratteriParolaInversa.join("");
//
//     return parolaInversa;
//
// }
//
// console.log(checkPalindrom(parolaInversa));
//
//   if (checkPalindrom(parola) == parola) {
//    console.log("la parola è palindroma");
//  } else {
//    console.log("la parola non è palindroma");
//  }
