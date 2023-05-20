let carA = prompt("Qual a velocidade do primeiro carro?");
let carB = prompt("E do segundo carro?");

let a = parseFloat(carA);
let b = parseFloat(carB);

if (a > b) {
  alert("O primeiro carro é o foda");
} else if (a == b) {
  alert("Os dois carros são brabos");
} else {
  alert("O segundo carro é o brabo");
}
