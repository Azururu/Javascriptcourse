// Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)
'use strict';

let number = 0;
const numbers = [];

do {
  number = parseInt(prompt("Enter a number."));
  numbers.push(number);
} while (number !== 0);

numbers.sort((a, b) => a-b);
numbers.reverse();
console.log(numbers);