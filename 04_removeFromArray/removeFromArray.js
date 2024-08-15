const removeFromArray = function(processedArray, ...argsToRemove) {

    const newArray = [];
    processedArray.forEach((element) => {
        if(!argsToRemove.includes(element)){
            newArray.push(element);
        }

        
    });

/* you could also use array.from    
which means, create an array from values i give you
eg Array.from('foo')
gives an array of three characters, 'f', 'o'.. etc
you could filter the initial array to ensure not equaling the argument
then return array.from that

*/

return newArray;

};

// console.log(removeFromArray([1,2,3,4],3));

// Do not edit below this line
module.exports = removeFromArray;
