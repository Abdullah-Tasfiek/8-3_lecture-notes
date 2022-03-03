/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */
//none are higher order. No nested functions. No functions as a parameter
function truthy() {
  return true;
}

function falsy() {
  return !truthy();
}

falsy(); //> false

/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */
//No because it's not invoking the previously defined functions or using them as a parameter
function left() {
  return "Left";
}

function right() {
  return "Right";
}

function go(goLeft = true) {
  return goLeft ? left : right;
}

/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */
//Yes, this is a higher order function because it has functions as parameters on line 49.
const directions = [];

function storeDirections(direction) {
  directions.push(direction);
}

function go(direction, operation) {
  operation(direction);
  return direction;
}

go("Left", storeDirections);
go("Right", storeDirections);
go("Up", storeDirections);
console.log(directions); //> ["Left", "Right", "Up"]

/**
 * Take a look at the higher order function below.
 * The transform() function expects, as its second argument, a function that accepts at least one argument.
 */

function transform(text, fn) {
  if (typeof fn !== "function") {
    return text;
  }

  return fn(text);
}

function capitalize() {
  return function(string) {
    let capital = string.toUpperCase()
    return capital;
  };
}
console.log(transform('coding', capitalize()));

function lowercase() {
  return function(string) {
    let lowercased = string.toLowerCase();
    return lowercased;
  }
}
console.log(transform('CodEr', lowercase()));

function dashes() {
  return function(string) {
    let dashedWords = string.replaceAll(' ', '-');
    return dashedWords;
  }
}
console.log(transform('code code code', dashes()));

function acronym() {
  let str = '';
  return function(string) {
    let uppercase = string.toUpperCase()
    let words = uppercase.split(' ');
    for (let letter of words) {
      let firstLetter = letter.charAt(0)
      str += firstLetter
    }
    return str;
  }
}
console.log(transform('up down left', acronym()))
/**
 * Use the function above to transform the text in the following ways. For each line below, you will need to write an anonymous function.
 *
 *
 * "left" -> "LEFT"
 * "RiGhT" -> "right"
 * "left right left" -> "left-right-left"
 * "up Down left" -> "UDL"
 */

/**
 * Write a fn called each which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The each fn loops through the given array and runs the callback function on each of it's elements.
 */
function each(arr, fn) {
  // write your code here
}

// The following call to each should print
// 1
// 2
// 3
// 4
each([1, 2, 3, 4], function (value) {
  console.log(value);
});

// The following call to each should print
// 2
// 4
// 6
// 8
each([1, 2, 3, 4], function (value) {
  console.log(value * 2);
});

/**
 * Write a fn called map which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The map fn should return a new array where each new element is the return value from the anonymous function with the argument as the original element value.
 */
function map(arr, fn) {
  // write your code here
}

// The following call to map should return
// [2, 4, 6, 8];
map([1, 2, 3, 4], function (value) {
  return value * 2;
});

/**
 * Write a fn called reject which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The reject fn should return a new array containing all of the values that do not return true to the callback
 */
function reject(arr, fn) {
  // write your code here
}

// The following call to reject should return
// [1, 2];
reject([1, 2, 3, 4], function (value) {
  return value > 2;
});

// The following call to reject should return
// [3, 5];
reject([2, 3, 4, 5], function (value) {
  return value % 2 === 0;
});
