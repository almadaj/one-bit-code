//Método
let pessoa = {
  nome: "Isaac",
  idade: 26,

  saudar() {
    console.log("Olá, gente!\nPrazer, meu nome é " + this.nome);
  },
};
pessoa.saudar();

//Funções recursivas
function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}

//dividir(40);

function fatorar(num) {
  console.log("Número fatorado é: " + num);
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log(num + " * !" + (num - 1));
    return num * fatorar(num - 1);
  }
}

console.log(fatorar(5));

//Funções anonimas
function somar(a, b) {
  return a + b;
}
let resultado = somar;

resultado = function (a, b) {
  return a - b;
};

console.log(resultado(4, 5));
