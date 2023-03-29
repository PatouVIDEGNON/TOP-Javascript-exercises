const convertToCelsius = function(input) {
  let inputToCelsius = (input - 32)*(5/9);
   
   return +inputToCelsius.toFixed(1);
  
};

const convertToFahrenheit = function(input) {
  let inputToFahrenheit =  input * (9/5)  + 32;
    
  
  return +inputToFahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
