let v = true;
const cartas = [];
let nova = "";

do {
  let st = prompt(
    "Qual opção você deseja?\n" +
      "1 - Puxar uma carta\n" +
      "2 - Inserir uma carta\n" +
      "3 - Encerrar"
  );

  switch (st) {
    case "1":
      alert("Puxando uma carta: \n");
      alert(cartas.pop());
      break;
    case "2":
      nova = prompt("Insira uma nova carta:");
      cartas.push(nova);
      break;
    case "3":
      alert("Encerrando...");
      v = false;
      break;
    default:
      alert("Insira uma opção válida");
  }
} while (v);
