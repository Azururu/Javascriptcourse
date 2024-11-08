// In the Harry Potter children's books,
// the sorting hat assigns a new student at Hogwarts School of Witchcraft and Wizardry
// to one of the four classes, which are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw.
// Write an electronic sorting hat that asks for a student's name and draws a room for him.
// If you enter Anna as the name, for example, the program prints to the HTML document
// "Anna, you are Ravenclaw." (3p)
//
// Use math.random() to draw a value (1, 2, 3 or 4)
// Once the number is drawn, you need to use a multiple choice structure
// (if, else if, ..., else or switch).

'use strict';
const name = prompt("Enter your name.")

const value = Math.floor(Math.random() *4) + 1;
console.log(value)
const house1 = "Gryffindor", house2 = "Slytherin", house3 = "Hufflepuff", house4 = "Ravenclaw";

if (value === 1) {
  document.querySelector('#p1').innerHTML = name + ", you are " + house1 + ".";
}
else if (value === 2) {
  document.querySelector('#p1').innerHTML = name + ", you are " + house2 + ".";
}
else if (value === 3) {
  document.querySelector('#p1').innerHTML = name + ", you are " + house3 + ".";
}
else if (value === 4) {
  document.querySelector('#p1').innerHTML = name + ", you are " + house4 + ".";
}
