const convertToCelsius = function(fahrenheit) {
  let celcius = ((fahrenheit-32)*5)/9
  return parseFloat(celcius.toFixed(1))
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (celcius*(9/5))+32
  return parseFloat(fahrenheit.toFixed(1))
};


/*
Calculations and rounding
F to C: °C = [ (°F-32)×5]/9
C to F: °F = (°C * 9/5) + 32

JS rounding to one dp:
toFixed(x) where x is number of dp
but this outputs a string
use parseFloat to convert back to float

*/

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
