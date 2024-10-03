/* Given an array as input with each item being an object, return the entire object for the oldest person
Options:
* Sort the array then either first or last index depending on sort direction
* reduce method - if older than current object in accumulator, store object
*/


const findTheOldest = function(arr) {
    return arr.reduce((acc,num) => 
        ((num.yearOfDeath || new Date().getFullYear()) - num.yearOfBirth) > ((acc.yearOfDeath || new Date().getFullYear()) - acc.yearOfBirth) 
        ? num : acc, arr[0]);
};

//more traditional function layout:
const findTheOldestTrad = function(arr) {
    const currentYear = new Date().getFullYear();

    return arr.reduce((acc, num) => {
        // Use the current year if the person is still alive
        const numAge = (num.yearOfDeath || currentYear) - num.yearOfBirth;
        const accAge = (acc.yearOfDeath || currentYear) - acc.yearOfBirth;

        // Compare ages and return the older person
        return numAge > accAge ? num : acc;
    }, arr[0]);
}

// Do not edit below this line
module.exports = findTheOldest;
