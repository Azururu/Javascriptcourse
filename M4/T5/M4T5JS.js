'use strict';

async function chuck() {
  const response = await fetch(`https://api.chucknorris.io/jokes/random`);
  const json = await response.json();
  console.log(json.value);
}

chuck();