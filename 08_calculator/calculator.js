const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const sum = arr => arr.reduce((acc,num) => acc + num, 0);
const multiply = arr => arr.reduce((acc, num) => acc*num, 1);
const power = (a,b) => a**b;
const factorial = a => a === 0 ? 1 : 
  Array.from({ length: a }, (_, i) => i + 1)
  .reduce((acc, num) => acc*num, 1);


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
