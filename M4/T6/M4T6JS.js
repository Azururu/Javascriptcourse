//Develop the app further (4p).
// Now add a form where you can enter a search term like in assignments 1-3
// Send the search term to https://api.chucknorris.io/jokes/search?query=${value_from_input} using fetch()
// Print each joke in this format:
'use strict';

let articleList = document.getElementById("result");

const chuckForm = document.querySelector("#chuck-form");
chuckForm.addEventListener('submit', async function(event) {
  event.preventDefault();
  const value_from_input = document.querySelector("#query").value;
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
    const jsonData = await response.json();
    articleList.innerHTML = '';
    for (let i = 0; i < jsonData.length; i++) {
      let article = document.createElement(`article`);
      let p = document.createElement(`p`);
      p.innerText = `${jsonData.result.value}`;
      article.appendChild(p);
      articleList.appendChild(article);
    }
  }catch (error) {
    console.log(error.message);
  }
});
