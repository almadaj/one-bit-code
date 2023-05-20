let v = true;
let saldo = 0;

do {
  let st = prompt(
    "Qual opção você deseja\n" +
      "1 - Depósito\n" +
      "2 - Saque\n" +
      "3 - Saldo\n" +
      "4 - Sair\n"
  );
  switch (st) {
    case "1":
      let add = parseFloat(prompt("Quanto deseja despositar?"));
      alert("SALDO: R$ " + (saldo += add));
      break;
    case "2":
      let min = parseFloat(prompt("Quanto deseja sacar?"));
      alert("SALDO: R$ " + (saldo -= min));
      break;
    case "3":
      alert("SALDO: R$ " + saldo);
      break;
    case "4":
      alert("Encerrando...");
      v = false;
      break;
    default:
      alert("Insira uma opção válida");
  }
} while (v);
