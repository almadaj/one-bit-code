const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.statusCode = 200;
  res.end("<h1>Oie Mundo em Node.js</h1>");
});

server.listen(3000, () => {
  console.log("Servidor Ativo!");
});
