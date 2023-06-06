const Author = require("./Author");

const ju = new Author("Juliano Almada");

const post = ju.writePost("Eu digo é mais", "Só digo isso");

post.addComment("Fulano", "Muito bom!");
post.addComment("Lucas", "Amei");

console.log(ju);
console.log(post);
