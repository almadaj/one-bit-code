import { invert } from "lodash";

function Log() {
  return function (target, key, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log("-------------------------------");
      console.log(
        `Chamando o método ${key} com os parâmatros: ${JSON.stringify(args)}`
      );
      const result = originalMethod.apply(this, args);
      console.log("-------------------------------");

      return result;
    };
  };
}

class Planet {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @Log()
  calculate(value: number) {
    console.log(`Calculando ${value} X 2`);
    return value * 2;
  }
  @Log()
  invertName() {
    return this.name.split("").reverse().join("");
  }
}

const planet = new Planet("Terra");
const result = planet.calculate(5);

console.log(`Resultado: ${result}`);
planet.invertName();
