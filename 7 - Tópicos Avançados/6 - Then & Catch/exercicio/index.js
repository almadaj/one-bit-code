function imc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== "number" || typeof height !== "number") {
      reject("Values must be a number type");
    } else {
      resolve(weight / (height * height));
    }
  });
}

function showImc(weight, height) {
  imc(weight, height)
    .then((result) => {
      console.log(`O resultado do IMC foi de ${result}.`);

      if (result < 18.5) console.log("Situação: MAGREZA");
      else if (result < 25) console.log("Situação: NORMAL");
      else if (result < 30) console.log("Situação: SOBREPESO");
      else if (result < 40) console.log("Situação: OBESIDADE");
      else console.log("Situação: OBESIDADE MÓRBIDA");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(`Calculando o IMC para peso ${weight}kg e altura ${height}m...`);
}
showImc(71, "texto");
showImc(70, 1.7);
