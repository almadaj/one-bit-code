let v = true;
const imoveis = [];

do {
  let st = prompt(
    "Qual opção você deseja?\n" +
      "1 - Exibir lista de imóveis\n" +
      "2 - Inserir um imóvel\n" +
      "3 - Encerrar\n\n" +
      "TOTAL DE IMOVEIS CADASTRADOS: " +
      imoveis.length
  );

  switch (st) {
    case "1":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].dono +
            "\nQuartos: " +
            imoveis[i].qtdQ +
            "\nBanheiros: " +
            imoveis[i].qtdB +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;

    case "2":
      const imovel = {};

      alert("Insira um novo imóvel:");
      imovel.dono = prompt("Qual o nome do proprietário?");
      imovel.qtdQ = prompt("Qual a quantidade de quartos?");
      imovel.qtdB = prompt("Qual a quantidade de banheiros?");
      imovel.garagem = prompt("Possui garagem?");

      const conf = confirm(
        "Deseja salvar esse imóvel?\n" +
          "\nProprietário: " +
          imovel.dono +
          "\nQuantidade de quartos: " +
          imovel.qtdQ +
          "\nQuantidade de banheiros: " +
          imovel.qtdB +
          "\nPossui garagem: " +
          imovel.garagem
      );
      if (conf) {
        imoveis.push(imovel);
        alert("Imóvel salvo");
      } else {
        alert("Voltando ao menu");
      }
      break;
    case "3":
      alert("Encerrando...");
      v = false;
      break;
    default:
      alert("Insira uma opção válida");
  }
} while (v);
