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
  },
  {
    quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
    source: 'Napoleon Hill',
    citation: '365 Inspirational Quotes',
  },
  {
    quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
    source: 'Amelia Earhart',
    citation: '365 Inspirational Quotes: Daily Motivation For Your Best Year Ever',
  },
  {
    quote: 'Quality is not an act, it is a habit',
    source: 'Aristotle',
    citation: 'Brainy Quote',
  },
  {
    quote: 'Only I can change my life. No one can do it for me',
    source: 'Carol Burnett',
    citation: 'Brainy Quote',
  },
  {
    quote: 'The doers are the major thinkers. The people that really create the things that change this industry are both the thinker and doer in one person. ',
    source: 'Steve Jobs',
    citation: 'Twitter',
  },
  {
    quote: 'Don’t let the noise of others\’ opinions drown out your own inner voice.',
    source: 'Steve Jobs', 
    citation: 'Stanford University commencement speech',
    year: 2005, 
  },
  {
    quote: 'Creativity is just connecting things', 
    source: 'Steve Jobs', 
    citation: 'Wired Article', 
    year: 1995, 
  },
];
/***
 * `getRandomQuote` function: Thie will return a object in the array.
***/
function getRandomQuote (quote) {
  var randomNumber = Math.floor(Math.random() * quotes.length );
    console.log(`Random itteration Generated ${randomNumber}`); // This is a test to make sure getRandomQuote is working
    return quote[randomNumber];
}
//This will return a string dependenet on certian keys within the array of objects. 
function generateQuoteString (quoteArray) {
  var tempArray = quoteArray;
  var quoteString = '';
    quoteString += '<p class="quote">' + tempArray.quote + '</p>';
    quoteString += '<p class="source">' + tempArray.source;
      if (isNaN(tempArray.citation)) {
        console.log(`Citation was added to string: ${tempArray.citation}`);
        quoteString += '<span class="citation">' + tempArray.citation + '</span>';
      }
      if (!isNaN(tempArray.year)) {
        console.log(`Year was added to string: ${tempArray.year}`);
        quoteString += '<span class="year">' + tempArray.year + '</span>';
      }
    quoteString += '</p>';
    return quoteString;
}
//This  function will display the string I generated in generateQuoteString function. 
function printQuotes (quoteDisplay) {
  var outputQuote_Box = document.getElementById('quote-box');
    outputQuote_Box.innerHTML = quoteDisplay;
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
function printQuote (quoteDisplay) {
  var testArray = [];
  var stringArray;
    testArray = getRandomQuote(quotes);
    stringArray = generateQuoteString(testArray);
    createRGB();
    printQuotes(stringArray);
    console.log('Everythingcomplied fine..Complete.'); // This is a test to make everything complied correctly. 
}
//timeFunction will create a window time interval set to a specific time. 
//When ever the time finnishes or button is clicked it will reset: 
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