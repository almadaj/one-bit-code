let tur = prompt("Qual o nome do turista?");

let city = true;
let cityN = 0;
let cities = "";

while (city) {
  let n = prompt("Você já visitou pra alguma cidade?");
  if (n.toLowerCase() === "não" || "nao") {
    city = false;
  } else if (n.toLowerCase() === "sim") {
    cities += "\n" + prompt("Qual cidade?");
    cityN++;
  }
}

alert(
  "O turista " +
    tur +
    " viajou para um total de: " +
    cityN +
    " cidades.\n" +
    "SEGUE A LISTA: " +
    cities
);
