const add = function(number1, number2) {
	
  return number1 + number2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {

  if (numbers.length == 0) return 0; 
  if (numbers.length == 1) return numbers[0]; 

  let num = 0; 

  for (let i = 0; i < numbers.length; i++) {


    num += numbers[i];
    
  }

  return num; 
};

const multiply = function(numbers) {
  
  let sum = numbers[0]; 

  for (let i = 1; i < numbers.length; i++) {
    sum *= numbers[i];
  }
  return sum; 
};

const power = function(num1, num2) {
	return num1 ** num2; 
};

const factorial = function(number) {

  
  if (number == 1) return 1; 
  else if (number == 0) return 1; 

  let sum = number; 

  for (let i = (number - 1); i > 0; i--) {
    sum *= i; 
  }


  return sum


};


factorial(2);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
