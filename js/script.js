/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote: "In order to write about life first you must live it.",
    source: "Ernest Hemingway",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    source: "Dalai Lama",
    year: 2003,
  },
  {
    quote: "I like criticism. It makes you strong.",
    source: "LeBron James",
    citation: "Life",
    tags: "Basktball",
  },
  {
    quote: "The unexamined life is not worth living.",
    source: "Socrates",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    source: "Babe Ruth.",
  },
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber];
  return randomQuote;
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  const randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p>
                <p class="source">${randomQuote.source}
  `;

  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tags) {
    html += `<span class="year">${randomQuote.tags}</span>`;
  }
  html += `</p>`;
  randomRGB();
  const htmlthing = (document.getElementById("quote-box").innerHTML = html);
  return htmlthing;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
// Generate a value from 0 to 256
// store that value in a variable
// Generate a RGB value and store in a variable
function randomRGB() {
  const randomValue = Math.floor(Math.random() * 256);
  const randomValuee = Math.floor(Math.random() * 256);
  const randomValueee = Math.floor(Math.random() * 256);
  const RGB = `rgb(${randomValue},${randomValuee},${randomValueee})`;
  // Use that value to change the background color
  document.body.style.backgroundColor = RGB;
}

document
  .getElementById("load-quote")
  .addEventListener(setInterval(printQuote, 1000 * 5), printQuote);
