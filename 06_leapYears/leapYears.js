const leapYears = function(year) {
    if (year % 4 == 0) {
        
        if (year % 100 == 0) {
            if (year % 400 == 0)
            {
                return true
            } else {
                return false
            }
        }       
        
        return true
        } else {
        return false;

        }    
}





/*
LOGIC CALCULATIONS
if divisible by 4, leap year
if divisible by 100, not leap year unless divisible by 400

from solution: this is a great way of testing, i like it:

const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

then simply test truthy or not. brilliant


*/

// Do not edit below this line
module.exports = leapYears;
