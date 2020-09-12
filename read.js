const readline = require('readline');
var greetService = require('./first.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  greetService.greet(answer);
  rl.close();
});