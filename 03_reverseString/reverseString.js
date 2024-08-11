const reverseString = function(string) {
    let forwardStringArray = string.split('');
    // reversedString = forwardString.reverse();
    let reversedStringArray = forwardStringArray.reverse();
    let reversedString = reversedStringArray.join(''); 

    //faster: return string.split('').reverse().join('');

    return reversedString


};

// Do not edit below this line
module.exports = reverseString;
