let word = prompt("Insira uma palavra para ser verificada: ");
let wordInv = "";
let palin = false;

for (let y = word.length - 1; y >= 0; y--) {
  wordInv += word[y];
}

for (let i = 0; i < word.length; i++) {
  if (word[i] === wordInv[i]) {
    palin = true;
  } else {
    palin = false;
    break;
  }
}

if (palin == true) {
  console.log("É UM PALINDROMO");
} else {
  console.log("NÃO É UM PALINDROMO!");
}
console.log("PALAVRA CORRETA: " + word);
console.log("PALAVRA INVERTIDA: " + wordInv);
