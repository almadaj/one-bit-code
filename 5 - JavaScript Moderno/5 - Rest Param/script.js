function sum(param, ...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}

//Fazendo uma soma sem que haja numero limite de somas
//como mais além do q um 'return a + b'
console.log(sum(2, 1));
console.log(sum(3, 4, 5, 8, 20));
