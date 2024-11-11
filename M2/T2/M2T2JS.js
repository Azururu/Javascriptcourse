// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants on the web page
// in an ordered list (<ol>) in alphabetical order. (2p)

'use strict';

const participants = [];
const num = parseInt(prompt("Enter number of participants."));
let name = "";

for (let i = 0; i < num; ++i) {
  name = prompt("Enter name of participant.");
  participants.push(name);
}

participants.sort()
let list = document.getElementById("list");
for (let i = 0; i < participants.length; ++i) {
  let li = document.createElement('li');
  li.innerText = participants[i];
  list.appendChild(li);
}