// Setup: The program below is supposed to check which value is larger, but it's broken.
//    Checkpoint: How can you tell it's broken? Can you run the code?
// Challenge:  Fix the program so that it correctly checks which value is larger.

// Hint:
//  Write a function that converts a string like "€39.501" into the number 39501
//  Using this function, compare the price of the house to the price of the car AS NUMBERS

// DO NOT CHANGE THE VALUE OF THESE VARIABLES
let priceOfHouse = "€1.500.000";
let priceOfCar = "€20.000";
function convertStringToNumber(str) {
  str = str.split('.');
  str[0] = str[0].slice(1);  
  str = str.join('');
  str = Number(str);
  return str;
}
console.log(convertStringToNumber(priceOfCar));

function convertStringToNumber(str) {
return parseInt((str.replaceAll('.','')).substring(1))
}

if (priceOfHouse > priceOfCar) {
  console.log("The house is more expensive");
} else {
  console.log("The car is more expensive");
}

