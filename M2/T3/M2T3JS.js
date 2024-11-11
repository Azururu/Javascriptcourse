// Write a program that asks for the names of six dogs.
// The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)
'use strict';

const doglist = [];

for (let i = 0; i < 6; ++i) {
  let dogname = prompt("Enter a dogs name.");
  doglist.push(dogname);
}

doglist.sort();
doglist.reverse();

let list = document.getElementById("ulist");
for (let i = 0; i < doglist.length; ++i) {
  let li = document.createElement("li");
  li.innerText = doglist[i];
  list.appendChild(li);
}