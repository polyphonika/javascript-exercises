const add = function(a,b) {
	return a + b;  
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
	let sum = 0;
  if (numbers) {
    numbers.forEach(number => {
      sum += number;
    });
  }
  return sum;
};

const multiply = function(numbers) {

let arrayLength = numbers.length;
let multiple = numbers[0];
for (let i = 1; i <= arrayLength-1; i++ ) {
  multiple *= numbers[i];
}

return multiple;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	/*
  what is a factorial?
  eg factorial of 5 = 5 x 4 x 3 x 2 x 1
  nb: factorial of 0 is 1
  */

  if (a==0 || a==1) {
    return 1;
  } else {
    let result = a;
    for (let i = a-1; i>=1; i--) {
      result *= i;
    }
    return result;
  } 

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
