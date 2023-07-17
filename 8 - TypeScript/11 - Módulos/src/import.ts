import * as lodash from "lodash";
import { Spaceship } from "./export";
interface BattleSpaceship extends Spaceship {
  weapons: number;
}

let xwing: BattleSpaceship = {
  name: "X-Wing",
  pilot: "Luke Skywalker",
  speed: 50,
  weapons: 4,
};

console.log(lodash.camelCase(xwing.name));
console.log(lodash.kebabCase(xwing.pilot));
