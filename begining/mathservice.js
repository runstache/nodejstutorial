function add(a, b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}


/* Exposes the Functions to other modules through and object.
module.exports = {
  add,
  subtract
};
*/

// Does the same thing but is explicit and a little easier to read.
exports.add = add;
exports.subtract = subtract;
