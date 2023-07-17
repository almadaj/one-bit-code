class Spaceship {
  private _name: string;
  protected captain: string;
  protected speed: number;

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  constructor(name: string, captain: string) {
    this._name = name;
    this.captain = captain;
    this.speed = 0;
  }

  public accelerate(rate: number, time: number) {
    this.speed = rate * time;
  }
}

// class Fighter extends Spaceship {
//   weapons: number;

//   shoot() {
//     for (let i = 0; i < this.weapons; i++) {
//       console.log("Pew!");
//     }
//   }

//   erase() {
//     this.name = "";
//     this.captain = "";
//   }
// }

// let ship = new Fighter("USS Enterprise", "James T. Kirk");

// ship.weapons = 20;
// ship.accelerate(50, 10);
