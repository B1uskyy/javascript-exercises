const convertToCelsius = function(number) {


let celsius = (number - 32) * (5/9); 


  if (celsius % 1 != 0)return Number.parseFloat(celsius.toFixed(1)); 

  return celsius; 

};

const convertToFahrenheit = function(number) {


  let fahrenheit = (number * 9/5 + 32); 

  if (fahrenheit % 1 != 0)return Number.parseFloat(fahrenheit.toFixed(1)); 

  return fahrenheit; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
