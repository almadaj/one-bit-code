function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}
const resultado = calcularMedia(7, 10);

console.log(resultado);

function criarProduto(name, price) {
  const produto = {
    name,
    price,
    stock: 1,
  };
  return produto;
}

console.log(criarProduto("Intel Core i3 8GB", 2500));

function areaRetangular(base, altura) {
  return base * altura;
}

function areaQuadrado(lado) {
  return areaRetangular(lado, lado);
}

//console.log(areaRetangular(7, 5));
//console.log(areaQuadrado(8));

function hi() {
  let text = "...";
  return text;
  text = "Olá Mundo!"; //Texto inacessível
  console.log(text);
}
console.log(hi());

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(maioridade(25));
console.log(maioridade(14));
