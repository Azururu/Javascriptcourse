'use strict';

let articleList = document.getElementById("results");

const showForm = document.querySelector("#show-form");
showForm.addEventListener('submit', async function(event) {
  event.preventDefault();
  const value_from_input = document.querySelector("#query").value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
    const jsonData = await response.json();
    articleList.innerHTML = '';
    for (let i = 0; i < jsonData.length; i++) {
      let article = document.createElement(`article`);
      let h2 = document.createElement(`h2`);
      let img = document.createElement(`img`);
      let summary = document.createElement(`div`);
      h2.innerHTML = `<a target="_blank" href=${jsonData[i].show.url}>${jsonData[i].show.name}</a>`;
      img.src = jsonData[i].show.image.medium;
      img.alt = jsonData[i].show.name;
      summary.innerHTML = jsonData[i].show.summary;
      article.appendChild(h2);
      article.appendChild(img);
      article.appendChild(summary);
      articleList.appendChild(article);
      console.log(jsonData);
    }
  }catch (error) {
    console.log(error.message);
  }
});
