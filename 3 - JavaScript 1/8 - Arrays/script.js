/*const listaCompras = [];

listaCompras[0] = "Arroz";
listaCompras[1] = "Feijão";
listaCompras[2] = "Docinho";

console.log(listaCompras); */

const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
//Inserindo no final do array
arr.push("Boromir");
console.log(arr);

//Inserindo no início do array
arr.unshift("Sauron");
console.log(arr);

//Removendo pelo último
arr.pop();
console.log(arr);

//Removendo pelo início
arr.shift();
console.log(arr);

//Pesquisando
const inclui = arr.includes("Gandalf");
console.log(inclui);

//Pesquisando pelo indice
const indice = arr.indexOf("Gandalf");
console.log(indice);

//Cortando
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

//Concatenando
const society = hobbits.concat(outros, "Boromir");
console.log(society);

//Substituindo
const removidos = society.splice(indice, 1, "Galdalf, o Brabo");
console.log(society);
console.log(removidos);

//Iterar
for (let i = 0; i < society.length; i++) {
  const elemento = society[i];
  console.log(elemento + " está na posição " + i);
}
