// Write a function that returns a random dice roll between 1 and 6.
// The function should not have any parameters. Write a main program that rolls the dice until the result is 6.
// The main program should print out the result of each roll in an unordered list (<ul>). (2p)

'use strict';

const rolls = [];
let value = 0;

function roll() {
  value = Math.floor(Math.random() *6) + 1;
  rolls.push(value);
  return value;
}

while (value!==6) {
  roll();
}

let list = document.getElementById("ulist");
for (let i = 0; i < rolls.length; ++i) {
  let li = document.createElement('li');
  li.innerHTML = rolls[i];
  list.appendChild(li);
}

