function hi() {
  alert("Olá, Mundo!");
}

function dobrar(x) {
  alert("O dobro de " + x + " é: " + x * 2);
}

function saudar(name = "Mundo") {
  alert("Olá, " + name + "!");
}

saudar("Juliano");
saudar();

/*function cadastrar(nome, senha, email, tipo="admin") {
  const usuario{
    //Caso fossem diferentes deveria ser escrito "nome: nome1,"
    nome,
    senha,
    email,
    tipo
  }
}*/

//cadastrar("Juliano", "123456", "almada@gmail.com");

function variosP(nome, tel, nasc, end, email, psw) {
  //...
}
function poucosP(usuario) {
  usuario.nome;
  usuario.email;
  usuario.nasc;
  usuario.senha;
}

const dadosUsuario = {
  nome: "Juliano",
  email: "almadaj@gmail.com",
  nasc: "4/08",
  senha: "12345",
};

poucosP(dadosUsuario);
