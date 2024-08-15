const removeFromArray = function(processedArray, ...argsToRemove) {

    const newArray = [];
    processedArray.forEach((element) => {
        if(!argsToRemove.includes(element)){
            newArray.push(element);
        }

        
    });



return newArray;

};

// console.log(removeFromArray([1,2,3,4],3));

// Do not edit below this line
module.exports = removeFromArray;
