'use strict';

const items = ["First item", "Second item", "Third item"];


let list = document.getElementById(`target`);
let li = null;

for (let i = 0; i < items.length; ++i) {
  li = document.createElement(`li`);
  if (i === 1) {
    li.setAttribute("class", "my-item");
  }
  li.innerHTML = items[i];
  list.appendChild(li);
}

