const palindromes = function (item) {
    const itemReversed = item.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').reverse().join('');
    if (itemReversed === item.replace(/[^a-z0-9]/gi, '').toLowerCase()) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
