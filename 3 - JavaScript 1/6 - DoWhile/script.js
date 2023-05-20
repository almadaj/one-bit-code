let speed = prompt("Qual a velocidade do seu carro?");

do {
  console.log("Baixando a velocidadade do seu carro: " + speed);
  speed -= 20;
} while (speed > 0);

alert("Velocidade final: " + speed + " Km/h");
