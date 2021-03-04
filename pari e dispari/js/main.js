// INIZIO COL DEFINIRE LA PRIMA VAR CHE MI SERVE PER FAR INSERIRE IL PARI O DISPARI ALL'UTENTE, INFATTI USO SUBITO UN 
// CICLO WHILE PER BLOCCARE IL MIO UTENTE ALL'INSERIMENTO DELLE DUE PAROLE CORRETTE
var sceltaUtente = prompt("Pillola Pari o Pillola Dispari???");

while (sceltaUtente != "pari" && sceltaUtente != "dispari") {
  sceltaUtente = prompt('Ehm... Devi letteralmente scrivere pari o dispari');
}

// DEFINISCO UNA NUOVA VARIABILE CHE USO PER FAR INSERIRE IL  NUMERO ALL'UTENTE E USO QUINDI I CICLO WHILE STAVOLTA
// PER CONTROLLARE IL CORRETTO ISERIMENTO ALL'INTERNO DEL CICLO
var numUtente = parseInt(prompt("Scrivi un numero da 1 a 5"));

while (numUtente <= 0 || numUtente > 5) {
  numUtente = parseInt(prompt("Dai su! Per favore Scrivi un numero da 1 a 5"));
}

console.log(numUtente);
// DEFINISCO ORA UNA VARIABILE UGUALE ALLA FUNZIONE mathRandomMaker PERCHÈ LA SFRUTTERÒ PIÙ  AVANTI PER FAR VISUALIZARE
// ALL'UTENTE IL NUMERO GENERATO DALL'UTENTE E UNA VAR CHE USERÒ COME SOMMA DEI DUE NUMERI

var numCpu = mathRandomMaker(1, 5);
console.log(numCpu);
var somma = numUtente + numCpu;
console.log(somma);

// A QUESTO PUNTO POSSO DEFINIRE UNA VARIABILE BOOLEANA esito CHE SE LA SOMMA È DIVISIBILE PER 2 SARÀ UGUALE A UNA STRINGA 'pari' ALTRIMENTI A UNA 'dispari'
if (somma % 2 == 0) {
  var esito = "pari";
  alert("La somma è pari");
} else {
  var esito = "dispari";
  alert("la somma è dispari");

};

// ORA USO UN ALTRA CONDIZIONE IF ELSE PER SEGNALARE LA VITTORIA ALL'INTERNO DEL MIO GIOCO, QUALORA LA SUA SCELTA FOSSE STATA UGUALE  AL MIO ESITO,  O VICEVERSA.

// USO ANCHE UN ALERT PER SEGNALARE UN MESSAGIO RIEPILOGATIVO DOVE INSERISCO LE MIE VARIABILI E SPIEGO PERCHÈ L'UTENTE HA VINTO O MENO.
if (sceltaUtente == esito) {
  alert( 'Congratulazioni! Hai vinto!');
  alert('Hai Scelto ' + numUtente + ' la CPU per te ha scelto ' + numCpu + ', hai azzeccato che la somma di questi ' + '(' +somma +')' +' fosse ' + sceltaUtente);
} else {
  alert('Stavolta non è andata! Dai riprova di nuovo');
  alert('Hai Scelto ' + numUtente + ' la CPU per te ha scelto ' + numCpu + ', hai detto che la somma di questi ' + '(' +somma +')' + ' sarebbe stata ' + sceltaUtente + ' e invece era ' + esito);


}

function mathRandomMaker(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).