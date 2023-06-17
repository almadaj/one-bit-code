function step02() {
  console.log("Passo 2");
}

console.log("Passo 1");
step02();
console.log("Passo 3");

console.log("Passo 04");
setTimeout(() => {
  console.log("Passo 05");
}, 2 * 1000);
console.log("Passo 06");
