function calcular(a, b, operacao) {
  console.log("Realizando operação");
  const resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  console.log("Realizando soma");
  return x + y;
}

console.log(calcular(3, 5, somar));

console.log(
  calcular(8, 4, function (x, y) {
    console.log("Realizando subtração");
    return x - y;
  })
);

function showElements(elemento, indice, array) {
  console.log({ elemento, indice, array });
}

const lista = ["Maçã", "Banana", "Laranja"];
for (let i = 0; i < lista.length; i++) {
  showElements(lista[i], i, lista);
}

lista.forEach(showElements);

lista.forEach(function (elemento, indice, array) {
  console.log({ elemento, indice, array });
});
