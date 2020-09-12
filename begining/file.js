const fs = require('fs');
const readline = require('readline');

var greetService = require('./first.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
    rl.close();
    fs.writeFile('temp.txt', greetService.greet(answer), (err) => {
      if (err) {
        console.log(err);
      }
    });
});