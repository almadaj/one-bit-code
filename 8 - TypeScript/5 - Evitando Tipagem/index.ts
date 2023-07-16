function sendSpaceship(spaceship: { pilot: string; copilot?: string }) {
  //
}

sendSpaceship({ pilot: "Han Solo", copilot: "Chewbacca" });
sendSpaceship({ pilot: "Luke" });
//
let input: unknown;
let n: any; //Não recomendado

input = "Test";
input = 20;
input = [];
//
function verify(test) {
  if (test) {
  } else {
    let _check: never;

    return _check;
  }
}
