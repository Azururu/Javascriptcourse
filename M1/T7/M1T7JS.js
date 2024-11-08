// Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)
//
// First, program asks the user for the number of dice rolls.
// Then the program throws a die as many times as the user defined.
// Print the sum of the results in the console or in the HTML document.

'use strict';

const rolls = parseInt(prompt('How many dice rolls?'));

let rollCount = 0;
let result = 0;
let sum = 0;

do {
  rollCount++;
  result = Math.floor(Math.random()*6)+1;
  sum = sum + result;
} while (rollCount < rolls);

document.querySelector('#p1').innerHTML = 'Sum of the dice is: ' + sum;
