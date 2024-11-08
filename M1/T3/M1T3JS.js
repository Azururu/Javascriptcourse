// Write a program that prompts for three integers.
// The program prints the sum, product and average of the numbers to the HTML document. (3p)
'use strict';
const int1 = parseInt(prompt("Syötä luku"));
const int2 = parseInt(prompt("Syötä luku"));
const int3 = parseInt(prompt("Syötä luku"));
const summa = int1 + int2 + int3;
const product = int1 * int2 * int3;
const average = (int1 + int2 + int3)/3;
document.querySelector('#target').innerHTML = summa.toString();
document.querySelector('#target2').innerHTML = product.toString();
document.querySelector('#target3').innerHTML = average.toString();