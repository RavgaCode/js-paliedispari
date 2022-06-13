// Dichiaro la variabile per chiedere una parola all'utente tramite prompt
const userWord = prompt("Scrivi una parola che ritieni palindroma");

// Imposto la funzione per verificare se una parola sia palindroma
const palindromeCheck = function (word) {
  // Imposto un ciclo for per trasformare la stringa della parola in un array
  let forwardWord = [];
  for (let i = 0; i < word.length; i++) {
    forwardWord.push(word[i]);
  }
  console.log(forwardWord);
  // Imposto un ciclo for per trasformare la stringa della parola in un array invertito
  let reverseWord = [];
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord.push(word[i]);
  }
  console.log(reverseWord);
  // Imposto una funzione per determinare se i due array sono identici
  function arrayCheck(array1, array2) {
    let check = true;
    if (array1.length !== array2.length) return (check = false);
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) return (check = false);
    }
    return (check = true);
  }
  // Invoco la funzione di controllo degli array inserendo i due array precedentemente creati come oggetto
  arrayCheck(forwardWord, reverseWord);
  // Dichiaro una funzione di controllo con valore uguale a quello della funzione, il cui valore sarà quello complessivo dell'intera funzione
  let wordCheck = arrayCheck(forwardWord, reverseWord);
  console.log(wordCheck);
  return wordCheck;
};
// Invoco la funzione di controllo di una parola palindroma utilizzando la parola inserita dall'utente
palindromeCheck(userWord);
