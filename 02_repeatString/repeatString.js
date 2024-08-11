const repeatString = function(string, num) {
    let returnedString = '';
    for (let i = 0; i < num; i++) {
        // console.log(string)
        returnedString += string;    
    }

    if (num < 0) {
        return 'ERROR'
    } else {
        return returnedString
    }
};

// repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
