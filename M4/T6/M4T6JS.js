//Develop the app further (4p).
// Now add a form where you can enter a search term like in assignments 1-3
// Send the search term to https://api.chucknorris.io/jokes/search?query=${value_from_input} using fetch()
// Print each joke in this format:
'use strict';

let articleList = document.getElementById("result");

const chuckForm = document.querySelector("#chuck-form");
chuckForm.addEventListener('submit', async function(event) {
  event.preventDefault();
  const value_from_input = document.getElementById('query').value;
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
    const arrays = await response.json();
    const result = arrays.result
    articleList.innerHTML = '';
    for (let i = 0; i < result.length; i++) {
      let article = document.createElement(`article`);
      let p = document.createElement(`p`);
      p.innerText = `${result[i].value}`;
      article.appendChild(p);
      articleList.appendChild(article);
    }
  }catch (error) {
    console.log(error.message);
  }
});
