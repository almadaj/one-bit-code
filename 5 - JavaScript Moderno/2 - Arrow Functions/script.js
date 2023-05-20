//Função normal
function normalSum(a, b) {
  return a + b;
}
console.log(`Soma normal: ${normalSum(2, 2)}`);

//Soma anonima
const anonymousSum = function (a, b) {
  return a + b;
};
console.log(`Soma anonima: ${anonymousSum(2, 2)}`);

//Soma com arrows
const arrowSum = (a, b) => {
  return a + b;
};
console.log(`Soma arrow: ${arrowSum(2, 2)}`);

//Subtração com arrows
const arrowSub = (a, b) => a - b;

console.log(`Soma arrow: ${arrowSub(5, 3)}`);

const double = (n) => `O dobro de ${n} é ${n * 2}`;
console.log(double(10));

//Filter simples com Arrows
const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const startingWithP = towns.filter((town) => town[0] === "P");
console.log(startingWithP);
