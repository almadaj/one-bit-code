function addPlayer() {
  //Pegando os valores dos inputs
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  //Confirm pra escalar com if
  const confirmation = confirm("Escalar " + name + " como " + position + "?");

  if (confirmation) {
    //Onde e o que será criado
    const teamList = document.getElementById("team-list");
    const playerItem = document.createElement("li");

    //Criando elemento player
    playerItem.id = "player-" + number;
    playerItem.innerText = "#" + number + ": " + name + " (" + position + ")";

    //Escrevendo o player na tela
    teamList.appendChild(playerItem);

    //Zerando o input
    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  //Pegando os valores dos inputs
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);

  //Escrevendo o player no alert
  const confirmation = confirm(
    "Remover o jogador " + playerToRemove.innerText + "?"
  );

  if (confirmation) {
    //Removendo e setando posição pra zero
    document.getElementById("team-list").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}
