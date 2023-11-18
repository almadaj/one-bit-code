const process = require("process");

console.log("Insira qualquer texto: ");

process.stdin.on("data", (keyboard) => {
  process.stdout.write(`Texto do usuário: ${keyboard}`);
  process.exit();
});
