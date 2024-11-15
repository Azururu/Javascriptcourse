'use strict';
const names = ['John', 'Paul', 'Jones'];

let namelist = document.getElementById(`target`);

for (let i = 0; i < names.length; ++i) {
  namelist.innerHTML += `<li>${names[i]}</li>`;
}
