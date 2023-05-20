let v = true;
const pacientes = [];
let novo = "";

do {
  let st = prompt(
    "Qual opção você deseja?\n" +
      "1 - Chamar paciente\n" +
      "2 - Inserir paciente\n" +
      "3 - Exibir Fila de Espera\n" +
      "4 - Encerrar"
  );

  let fila = "";
  for (let i = 0; i < pacientes.length; i++) {
    fila += i + 1 + "º - " + pacientes[i] + "\n";
  }

  switch (st) {
    case "1":
      alert("O próximo paciente será chamado: \n");
      alert(pacientes.shift());
      break;
    case "2":
      novo = prompt("Insira o novo paciente:");
      pacientes.push(novo);
      break;
    case "3":
      alert(fila);
      break;

    case "4":
      alert("Encerrando...");
      v = false;
      break;
    default:
      alert("Insira uma opção válida");
  }
} while (v);
