//Aqui criou algumas funções para serem chamadas por outra função
//Criando o label e input para o EventListener q virá abaixo

//Criando label: texto e o htmlFor(for="name")
//TEXT: o que pegar HTMLFOR: de onde pegar
function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.name = htmlFor;
  label.innerText = text;
  return label;
}

//Criando input, mais tarde será chamado, por enquanto aqui somente declarado
//cada parâmetro que será necessário pra criar um
function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;

  return input;
}

//Capturando os dados dos respectivos
const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("devForm");
//Criando array e linhas para inserir os dados dos inputs e serem
//mostrados na tela
const developers = [];
let inputRows = 0;

//EventListener onde vai acontecer a criação dos inputs e labels
//novos, serão adicionados no array
addTechBtn.addEventListener("click", function (ev) {
  //1. Setar onde será criado os novos elementos no HTML
  const stackInputs = document.getElementById("stackInputs");

  //2. Qual elemento será criado no stackInputs, o li
  const newRow = document.createElement("li");

  //3. Passando novas linhas pro array
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  //4. Chamamos as funções criadas lá em cima, passamos as funções
  //para variáveis com os parâmetros apropriados
  const techNameLabel = createLabel("Tecnologia: ", "techName-" + rowIndex);
  const techNameInput = createInput("techName-" + rowIndex, null, "techName");

  //5. Criamos os labels e inputs para os radios
  const expLabel = createLabel("Tempo de Experiência: ");
  const id1 = "expRadio-" + rowIndex + ".1";
  const expRadio1 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel1 = createLabel("0-2 anos", id1);

  const id2 = "expRadio-" + rowIndex + ".2";
  const expRadio2 = createInput(id2, "3-4 anos", "techExp" + rowIndex, "radio");
  const expLabel2 = createLabel("3-4 anos", id2);

  const id3 = "expRadio-" + rowIndex + ".3";
  const expRadio3 = createInput(id3, "+5 anos", "techExp" + rowIndex, "radio");
  const expLabel3 = createLabel("+5 anos", id3);

  //6. Botão para remover o último bloco criado
  //Declara o novo botão criado, com o tipo e o nome
  const removeRowBtn = document.createElement("button");
  removeRowBtn.type = "button";
  removeRowBtn.innerText = "Remover";

  //E depois a função EventListener
  removeRowBtn.addEventListener("click", function () {
    stackInputs.removeChild(newRow);
  });

  //7.newRow vai carregar todas as info dos inputs junto aos labels

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRowBtn
  );
  //Irá inserir uma nova linha no HTML, as infos de "o que será criado"
  //foi descrito na newRow.append(par, par,...)
  stackInputs.appendChild(newRow);
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  //Capturando os elementos criados, queryAll para pegar todas as X linhas
  const fullNameInput = document.getElementById("fullname");
  const inputRows = document.querySelectorAll(".inputRow");

  const technologies = [];
  inputRows.forEach(function (row) {
    // #rowId input[name="techName"]
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    technologies.push({ name: techName, exp: techExp });
  });

  const newDev = { fullname: fullNameInput.value, technologies: technologies };
  developers.push(newDev);
  alert("Dev cadastrado com sucesso!");

  fullNameInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(developers);
});
