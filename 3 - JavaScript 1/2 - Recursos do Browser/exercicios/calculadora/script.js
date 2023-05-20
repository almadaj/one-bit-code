let x = window.prompt("Insira um número:");
let y = window.prompt("Insira outro número:");

let a = parseFloat(x);
let b = parseFloat(y);
let soma = a + b;
console.log(
  "SOMA: " +
    soma +
    "\n" +
    "SUBTRAÇÃO: " +
    (x - y) +
    "\n" +
    "MULTIPLICAÇÃO: " +
    x * y +
    "\n" +
    "DIVISÃO: " +
    parseFloat(y / x) +
    "\n"
);
