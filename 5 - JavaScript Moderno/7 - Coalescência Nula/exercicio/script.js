// Calculando Média Simples:
// a + b + .../n

const mediaSimples = (...numeros) => {
  const soma = numeros.reduce((accum, num) => accum + num, 0);
  return soma / numeros.length;
};

console.log(mediaSimples(4, 5, 6, 7, 8, 11));

// Calculando Média Ponderada:
// ( ax ) + ( by ) +..../ x + y...
const mediaPonderada = (...entradas) => {
  const soma = entradas.reduce(
    (accum, { num, peso }) => accum + num * (peso ?? 1),
    0
  );
  const pesos = entradas.reduce(
    (accum, entrada) => accum + (entrada.peso ?? 1),
    0
  );
  return soma / pesos;
};

console.log(
  mediaPonderada({ num: 9, peso: 3 }, { num: 7 }, { num: 10, peso: 1 })
);

// Calculando Mediana:
// mediana(1, 3, 5, 6, 7) = 5
// mediana(1, 3, 4, 5, 6, 7) = 4 + 5/ 2

const mediana = (...numeros) => {
  const numOrdenados = [...numeros].sort((a, b) => a - b);
  const meio = Math.floor(numOrdenados.length / 2);
  if (numOrdenados.length % 2 !== 0) {
    return numOrdenados[meio];
  } else {
    const primeira = numOrdenados[meio - 1];
    const segunda = numOrdenados[meio];
    return mediaSimples(primeira, segunda);
  }
};
console.log(mediana(1, 3, 5, 6, 7));
console.log(mediana(1, 3, 4, 5, 6, 7));

// Calculando Moda:
// moda( 99, 99, 99, 5, 4, 9, 7, 4) = 99
const moda = (...numeros) => {
  const qtd = numeros.map((num) => [
    num,
    numeros.filter((n) => num === n).length,
  ]);
  qtd.sort((a, b) => b[1] - a[1]);
  return qtd[0][0];
};

console.log(moda(99, 99, 99, 99, 99, 5, 4, 9, 7, 4));
