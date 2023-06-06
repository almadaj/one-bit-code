class Vehicle {
  move() {
    console.log("Em movimento...");
  }
}

class Bike extends Vehicle {
  move() {
    console.log("A bike está se movimentando");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movimentando");
  }
}

class Airplane extends Vehicle {
  move(speed) {
    console.log(`O avião está voando a ${speed} Km/h em relação ao solo`);
  }
}

const bici = new Bike();
const aviao = new Airplane();
// bici.move();
// aviao.move(789);

function start(vehicle) {
  console.log("Dando partida num veículo!");
  vehicle.move();
}

start(bici);
start(aviao);
