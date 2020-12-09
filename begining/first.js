var mathService = require('./mathservice.js');

function greet(name) {
  var msg = `Hello ${name}!`;
  console.log(msg);
  return msg;  
}

exports.greet = greet;
