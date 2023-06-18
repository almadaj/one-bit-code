function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada.");
    setTimeout(() => {
      console.log("Resolvendo a promise...");
      resolve("Resultado");
    }, 3 * 1000);
  });
}

const p = execute();

p.then((result) => {
  console.log(`A promise foi resolvida. O resultado foi: ${result}`);
});
