const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

//Aqui passa-se a referência, é uma cópia porém refletirá nos dois arrays
const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push("Juno");

console.log({ towns, townsCopy });

//Com o spread conseguimos criar referência porém como um clone sem refletir em ambos
const townsClone = [...towns, "Fortaleza"];

townsClone.push("Aldebaran");
console.log({ towns, townsCopy, townsClone });

const townsObj = { ...towns };
const townsObjClone = { ...townsObj };

townsObjClone.test = "Teste";
console.log({ townsObj, townsObjClone });
