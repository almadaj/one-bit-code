let v = true;

do {
  let st = prompt("Qual opção você deseja");

  switch (st) {
    case "1":
      alert("Você selecionou a primeira opção!");
      break;
    case "2":
      alert("Você selecionou a segunda opção!");
      break;
    case "3":
      alert("Você selecionou a terceira opção!");
      break;
    case "4":
      alert("Você selecionou a quarta opção!");
      break;
    case "5":
      alert("Encerrando...");
      v = false;
      break;
    default:
      alert("Insira uma opção válida");
  }
} while (v);
