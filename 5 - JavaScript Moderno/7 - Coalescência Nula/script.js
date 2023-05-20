const a = 0;

const b = null;

const c = "Teste";

console.log(a || b || c);
console.log(a ?? b ?? c);

let x = 0;
let y = a || 42;

console.log({ x, y });

y = x ?? 42;

console.log({ x, y });
