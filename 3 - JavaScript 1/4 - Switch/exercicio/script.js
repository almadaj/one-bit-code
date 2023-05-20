const num = prompt("Digite o valor em METROS");
const n = parseFloat(num);

const exp = prompt(
  "Para qual unidade de medida deseja converter?" +
    "\n1 - milímetros (mm)" +
    "\n2 - centímetros (cm)" +
    "\n3 - decímetros (dm)" +
    "\n4 - decâmetros (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - kilômetro (km)"
);

switch (exp) {
  case "1":
    alert("Resultado é: " + n * 1000 + "mm");
    break;

  case "2":
    alert("Resultado é: " + n * 100 + "cm");
    break;

  case "3":
    alert("Resultado é: " + n * 10 + "dm");
    break;

  case "4":
    alert("Resultado é: " + n / 10 + "dam");
    break;

  case "5":
    alert("Resultado é: " + n / 100 + "hm");
    break;

  case "6":
    alert("Resultado é: " + n / 1000 + "km");
    break;

  default:
    "Opção inválida!";
    break;
}
