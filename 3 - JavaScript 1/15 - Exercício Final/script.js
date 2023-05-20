let v = true;

const vagas = [];
function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function criar() {
  const nome = prompt("Informe o nome da vaga:");
  const desc = prompt("Informe a descrição da vaga:");
  const limite = prompt("Informe a data limite da vaga (dd/mm/aaaa):");

  const conf = confirm(
    "Deseja criar a vaga: \n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      desc +
      "\nData limite: " +
      limite
  );
  if (conf) {
    const novaVaga = { nome, desc, limite, canditatos: [] };
    vagas.push[novaVaga];
    alert("Vaga criada!");
  }
}

function exibir() {
  const index = prompt("Informe o índice na vaga desejada");
  const vaga = vagas[index];

  const candidatosTexto = vaga.canditatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");
  alert(
    "Vaga nº " +
      index +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.desc +
      "\nData Limite: " +
      vaga.limite +
      "\nQuantidade de candidatos: " +
      vaga.canditatos.length +
      "\nCandidatos inscritos: " +
      candidatosTexto
  );
}

function inscrever() {
  const candidato = prompt("Informe o nome do candidato:");
  const index = prompt("Informe o indice da vaga:");
  const vaga = vaga[index];

  const conf = confirm(
    "Deseja inscreve o candidato " + candidato + "na vaga " + index + " ?"
  );

  if (conf) {
    vagas.candidatos.push[novaVaga];
    alert("Inscrição criada!");
  }
}

function excluir() {
  const index = prompt("Informe o indice da vaga a ser excluída:");
  const vaga = vagas[index];

  const conf = confirm(
    "Vaga nº " +
      index +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.desc +
      "\nData Limite: " +
      vaga.limite
  );

  if (conf) {
    vagas.splice(index, 1);
    alert("Vaga Excluida!");
  }
}

do {
  let st = prompt(
    "Qual operação você deseja calcular?\n" +
      "1 - Listar Vagas Disponíveis \n" +
      "2 - Criar Vaga \n" +
      "3 - Visualizar Vagas \n" +
      "4 - Inscrever-se  \n" +
      "5 - Excluir Vaga \n" +
      "6 - Encerrar\n\n"
  );

  switch (st) {
    case "1":
      listarVagas();
      break;

    case "2":
      criar();
      break;

    case "3":
      exibir();
      break;

    case "4":
      inscrever();
      break;

    case "5":
      excluir();
      break;

    case "6":
      alert("Encerrando...");
      v = false;
      break;
    default:
      alert("Insira uma opção válida");
  }
} while (v);
