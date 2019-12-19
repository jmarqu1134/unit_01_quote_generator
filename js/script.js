/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  //Quotes Came from the link below. 
  //https://genius.com/Juice-wrld-lucid-dreams-lyrics
  //https://www.brainyquote.com/lists/topics/top-10-motivational-quotes
/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: 'Life is about making an impact, not making an income.',
    source: 'Kevin Kruse',
    citation: 'twitter',
    category: 'Motivational', 
  },
  {
    quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
    source: 'Napoleon Hill',
    citation: '365 Inspirational Quotes',
    category: 'Motivational',

  },
  {
    quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
    source: 'Amelia Earhart',
    citation: '365 Inspirational Quotes: Daily Motivation For Your Best Year Ever',
    category: 'Inspirational',
  },
  {
    quote: 'Quality is not an act, it is a habit',
    source: 'Aristotle',
    citation: 'Brainy Quote',
    category: 'Motivational',
  },
  {
    quote: 'Only I can change my life. No one can do it for me',
    source: 'Carol Burnett',
    citation: 'Brainy Quote',
    category: 'Motivational',
  },
  {
    quote: 'The doers are the major thinkers. The people that really create the things that change this industry are both the thinker and doer in one person. ',
    source: 'Steve Jobs',
    citation: 'Twitter',
    category: 'Motivational',
  },
  {
    quote: 'Don’t let the noise of others\’ opinions drown out your own inner voice.',
    source: 'Steve Jobs', 
    citation: 'Stanford University commencement speech',
    year: 2005, 
    category: 'Inspirational',
  },
  {
    quote: 'Creativity is just connecting things', 
    source: 'Steve Jobs', 
    citation: 'Wired Article', 
    year: 1995,
    category: 'Inspirational',
 
  },
];
/***
 * `getRandomQuote` function: Thie will return a object in the array.
***/
function getRandomQuote (quote) {
  var randomNumber = Math.floor(Math.random() * quotes.length );
    return quote[randomNumber];
}
//This will return a string dependenet on certian keys within the array of objects. 
function generateQuoteString (quoteArray) {
  //var tempArray = quoteArray;
  var quoteString = '';
    quoteString += `<p class="quote"> ${quoteArray.quote} </p>`;
    quoteString += `<p class="source"> ${quoteArray.source}`;
      if (isNaN(quoteArray.citation)) {
        quoteString += `<span class="citation"> ${quoteArray.citation} </span>`;
      }
      if (!isNaN(quoteArray.year)) {
        quoteString += `<span class="year"> ${quoteArray.year} </span>`;
      }
    quoteString += `<span class="category"> ${quoteArray.category} </span></p>`;
    return quoteString;
}
// createRGB will create a random number and empliment it to RGB color and change backgrounf color. 
function createRGB () {
  var rgbColor = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = 'rgb('+ rgbColor + ',' + rgbColor + ',' + rgbColor + ')';
  document.body.style.color = 'white';
}
/***
 * `printQuote` function: This will call all functions needed to print the object and change the color. 
***/
function printQuote () {
  var randomQuote = [];
  var stringArray;
  var outputQuote_Box = document.getElementById('quote-box');
    randomQuote = getRandomQuote(quotes);
    stringArray = generateQuoteString(randomQuote);
    createRGB();
    outputQuote_Box.innerHTML = stringArray;
}
//timeFunction will create a window time interval set to a specific time. 
const timeFunction = function functionOfTime() {
  clearInterval(window.timer);
  printQuote();
  window.timer = setInterval(printQuote, 4500);
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", timeFunction, false);