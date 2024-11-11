// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered.
// Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.
'use strict';

let num = 0;
const numbers = [];

for (let i = 0; i <= 4; ++i) {
  num = parseInt(prompt(`Enter a number.`));
  numbers.push(num);
  console.log(numbers);
}

for (let i = numbers.length; i >= 0; --i) {
  console.log(numbers[i])
}

