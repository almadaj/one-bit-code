let v = true;

function retangulo() {
  const baseA = prompt("Qual a base do retângulo?");
  const alturaA = prompt("Qual a base do retângulo?");
  return baseA * alturaA;
}

function triangulo() {
  const base = prompt("Qual a base do triângulo?");
  const altura = prompt("Qual a base do triângulo?");
  return (base * altura) / 2;
}

function quadrado() {
  const lado = prompt("Qual o lado do quadrado?");
  return lado * lado;
}

function trapezio() {
  const bMaior = parseFloat(prompt("Qual a base maior do trapézio?"));
  const bMenor = parseFloat(prompt("Qual a base menor do trapézio?"));
  const altura = parseFloat(prompt("Qual a altura do trapézio?"));
  return ((bMaior + bMenor) * altura) / 2;
}

function circulo() {
  const lado = prompt("Qual o raio do círculo?");
  return raio * raio * 3.14;
}

do {
  let st = prompt(
    "Qual operação você deseja calcular?\n" +
      "1 - Área do triângulo: \n" +
      "2 - Área do retângulo: \n" +
      "3 - Área do quadrado: \n" +
      "4 - Área do trapézio: \n" +
      "5 - Área do círculo: \n" +
      "6 - Encerrar\n\n"
  );

  switch (st) {
    case "1":
      alert(triangulo());
      break;

    case "2":
      alert(retangulo());
      break;

    case "3":
      alert(quadrado());
      break;

    case "4":
      alert(trapezio());
      break;

    case "5":
      alert(circulo());
      break;

    case "6":
      alert("Encerrando...");
      v = false;
      break;
    default:
      alert("Insira uma opção válida");
  }
} while (v);
