'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

console.log(students.length);

let studentList = document.getElementById(`target`);

for (let i = 0; i < students.length; ++i) {
  let option = document.createElement(`option`);
  option.setAttribute(`value`, `${students[i].id}`);
  option.innerText = students[i].name;
  studentList.appendChild(option);
}