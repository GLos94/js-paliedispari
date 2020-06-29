// l'utente scegli pari o dispari
var paDis = prompt("Scegli pari o dispari");
console.log(paDis);

// l'utente inserisce un numero tra 1 e 5
var numUtente = parseInt(prompt("inserisci un numero da 1 a 5"));

// si genera un numero casuale per la cpu
var numCpu = parseInt((Math.random()*10));
console.log(numUtente);
console.log(numCpu);

// sommare il numero dato dall'utente al numero della cpu
var somma = numUtente + numCpu;
console.log(somma);

// // stabilire se la somma dei due numeri è pari o dispari
// if (somma%2==0) {
//   console.log("la somma è un numero pari");
// } else {
//   console.log("la somma è un numero dispari");
// }



// creiamo la funzione
function isEven(somma) {
  if (somma%2==0) {
    return true;
  } else {
    return false;
  }
}

// dichiarare chi ha vinto
if (somma == paDis) {
  console.log("Hai vinto!");
} else {
  console.log("Ha vinto la CPU!");
}
