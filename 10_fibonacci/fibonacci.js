/* Notes to create fibonacci algorithm:
function has a single input number, num
create an array from this number of length num
array must contain fibonacci
then return index[num] of array
*/ 

const fibonacci = function(num) {
    num = Number(num);
    
    if (num === 0) {
        return 0
    } else if (num < 0 ) {
        return 'OOPS'
    }  

    let fibonacciArray = [];
    for (let i = 0; i<num; i++) {
        i === 0 || i ===1 ? fibonacciArray[i] = 1 :
        fibonacciArray[i] = fibonacciArray[i-1]+ fibonacciArray[i-2]
    }
    return fibonacciArray[num-1];
};

/* efficient version below */
const fibonacciFast = function(num) {
    num = Number(num);

    if (num === 0) return 0;
    if (num < 0) return 'OOPS';

    // Initialize the first two Fibonacci numbers
    let a = 1, b = 1;

    // Calculate Fibonacci sequence iteratively for num > 2
    for (let i = 2; i < num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    // Return the nth Fibonacci number
    return b;
};



// Do not edit below this line
module.exports = fibonacci;
