// VADO A DEFINIRMI UNA VARIABILE ALLA QUALE LEGHERÒ IL PROMPT PER L'UTENTE.

var parolaUtente = prompt("inserisci una parola");


// USO UN IF PER DIRE CHE SE L'INVERSO DELLA MIA PAROLA È UGUALE ALLA PAROLA INSERITA ALLORA APPARIRÀ UN MESSAGGIO
// VICEVERSA APPARIRÀ UN MESSAGGIO DIVERSO (UTILIZZO UNA FUNZIONE PER INVERTIRE LA PAROLA)
if (reverseWord(parolaUtente) == parolaUtente) {
 alert( parolaUtente + " è una parola palindroma");
} else {
  alert( parolaUtente + " non è una parola palindroma");
}

// reverseWord
// FUNZIONE CHE USO PER INVERTIRE LA MIA PAROLA
 
function reverseWord(parola) {
  var parolaInversa = '';
  for (var i = parola.length - 1; i >= 0; i--) {
    parolaInversa += parola[i];
  }
  return parolaInversa;
}
