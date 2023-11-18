const fs = require("fs");

fs.writeFile("teste.txt", "Olá Mundo em Node", (er) => {
  console.log(er);
});

fs.rename("teste.txt", "testando.txt", (er) => console.log(er));
fs.unlink("testando.txt", (er) => console.log(er));

console.log(__dirname);
