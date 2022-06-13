// Dichiaro i prompt per chiedere pari o dispari ed il numero da 1 a 5 all'utente
const userOddOrEven = prompt("Pari o dispari?");
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
// Imposto la funzione per sommare il numero dell'utente con uno generato randomicamente, e determinare se la somma sia pari o dispari
const sumOddEvenNumbers = function (number) {
  const minNumber = 1;
  const maxNumber = 5;
  const randomNumber = Math.floor(Math.random() * maxNumber + minNumber);
  let oddEven;
  const sum = randomNumber + number;
  if (sum % 2 === 0) {
    return (oddEven = "pari");
  } else {
    return (oddEven = "dispari");
  }
};
// Determino il vincitore e stampo in console
let humanWin;
if (sumOddEvenNumbers(userNumber) === userOddOrEven) {
  console.log("Human wins");
  humanWin = true;
} else {
  console.log("Robot wins");
  humanWin = false;
}
