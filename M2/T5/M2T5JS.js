// Write a program that prompts the user for numbers.
// When the user enters one of the numbers he previously entered,
// the program will announce that the number has already been given and stops its operation
// and then prints all the given numbers to the console in ascending order. (2p)

'use strict';

const numbers = [];
let number = 0;
do {
  number = parseInt(prompt("Enter a number."));
  if (numbers.includes(number)){
    alert('The number has already been given');
    break;
  }
  numbers.push(number);
} while (numbers.includes!==(number));

numbers.sort((a,b) => a-b);
console.log(numbers);