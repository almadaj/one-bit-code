const planets = [];
function addPlanet(name, coordinates, situation) {
  planets.push({ name, coordinates, situation, satelites: [] });
  alert(`O planeta ${name} foi registrado com sucesso`);
}
function findPlanet(name) {
  const planet = planets.find((planet) => planet.name === name);
  return planet !== null && planet !== void 0 ? planet : false;
}
function updateSituation(situation, planet) {
  planet.situation = situation;
  alert(`A situação ${planet.name} foi atualizada para ${situation}`);
}
function addSatellite(name, planet) {
  planet.satelites.push(name);
  alert(`O satélite ${name} foi atualizada para ${planet.name}`);
}
function removeSatellite(name, planet) {
  planet.satelites = planet.satelites.filter((satelite) => satelite !== name);
  alert(`O satélite ${name} foi removido do planeta ${planet.name}`);
}
function promptValidSituation() {
  let situation;
  let validSituation = false;
  while (!validSituation) {
    const situationInput = prompt(
      "Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado"
    );
    switch (situationInput) {
      case "1":
        situation = "Habitado";
        validSituation = true;
        break;
      case "2":
        situation = "Habitável";
        validSituation = true;
        break;
      case "3":
        situation = "Inabitável";
        validSituation = true;
        break;
      case "4":
        situation = "Inexplorado";
        validSituation = true;
        break;
      default:
        alert("Situação inválida");
        break;
    }
  }
  return situation;
}
function promptValidPlanet(callback) {
  const planetName = prompt("Informe o nome do planeta");
  const planet = findPlanet(planetName);
  if (planet) {
    callback(planet);
  } else {
    alert("Planeta não encontrado! Retornando ao menu...");
  }
}
function firstMenuOption() {
  const name = prompt("Informe o nome do planeta:");
  const coordA = Number(prompt("Informe a primeira coordenada: "));
  const coordB = Number(prompt("Informe a segunda coordenada: "));
  const coordC = Number(prompt("Informe a terceira coordenada: "));
  const coordD = Number(prompt("Informe a quarta coordenada: "));
  const situation = promptValidSituation();
  const confirmation = confirm(`Confirma o registro do planeta ${name}?
  Coordenadas: (${coordA}, ${coordB}, ${coordC}, ${coordD})
  Situação: ${situation}`);
  if (confirmation) {
    addPlanet(name, [coordA, coordB, coordC, coordD], situation);
  }
}
function secondMenuOption() {
  promptValidPlanet((planet) => {
    const situation = promptValidSituation();
    updateSituation(situation, planet);
  });
}
function thirdMenuOption() {
  promptValidPlanet((planet) => {
    const satellite = prompt("Informe o nome do satélite a ser adicionado:");
    addSatellite(satellite, planet);
  });
}
function fourthMenuOption() {
  promptValidPlanet((planet) => {
    const satellite = prompt("Informe o nome do satélite a ser removido:");
    removeSatellite(satellite, planet);
  });
}
function fifthMenuOption() {
  let list = "Planetas:\n";
  planets.forEach((planet) => {
    // Repare que as tuplas são uma forma fácil de permitir a
    // desestruturação com qualquer nome nas variáveis.
    // As variáveis a seguir podem ter qualquer nome pois a
    // tupla segue um padrão fixo.
    const [a, b, c, d] = planet.coordinates;
    list += `
      Nome: ${planet.name}
      Coordenadas: (${a}, ${b}, ${c}, ${d})
      Situação: ${planet.situation}
      Satélites: ${planet.satelites.length}
    `;
    planet.satelites.forEach((satellite) => {
      list += `    - ${satellite}\n`;
    });
  });
  alert(list);
}
// Menu
let userOption = 0;
while (userOption !== 6) {
  const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `;
  userOption = Number.parseInt(prompt(menu));
  switch (userOption) {
    case 1:
      firstMenuOption();
      break;
    case 2:
      secondMenuOption();
      break;
    case 3:
      thirdMenuOption();
      break;
    case 4:
      fourthMenuOption();
      break;
    case 5:
      fifthMenuOption();
      break;
    case 6:
      alert("Encerrando o sistema...");
      break;
    default:
      alert("Opção inválida! Retornando ao painel principal...");
      break;
  }
}
