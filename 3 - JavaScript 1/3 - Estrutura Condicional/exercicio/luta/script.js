let charA = prompt("Guerreiro, qual o seu nome?");
let pwrA = prompt("Qual a sua força?");

console.log("Muito prazer, " + charA);

let charB = prompt(charA + ", qual o seu inimigo?");
let pwrB = prompt("Qual a força dele?");

let defB = prompt("Ele tem um escudo?");
var isSet;
if (defB.toLowerCase() === "true") {
  isSet = true;
}
if (defB.toLowerCase() === "false") {
  isSet = false;
}

let a = parseFloat(pwrA);
let b = parseFloat(pwrB);

if (a > b && !isSet) {
  const soma = b - a;
  if (soma <= 0) {
    alert("Você derrotou " + charB);
  } else {
    alert("O inimigo ainda está de pé com " + soma + " de HP");
  }
} else if (a > b && isSet) {
  const soma = b - a / 2;
  if (soma <= 0) {
    alert("Você derrotou " + charB);
  } else {
    alert("O inimigo ainda está de pé com " + soma + " de HP");
  }
} else if (a <= b) {
  alert("O dano causado foi ZERO");
}
