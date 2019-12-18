/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  //Quotes Came from the link below. 
  //https://genius.com/Juice-wrld-lucid-dreams-lyrics
/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: 'I still see your shadows in my room Can\'t take back the love that I gave you It\'s to the point where I love and I hate you And I cannot change you so I must replace you (oh)',
    source: '– Juice World',
  },
  {
    quote: 'Easier said than done, I thought you were the one Listenin to my heart instead of my head',
    source: '– Juice World',
  },
  {
    quote: 'You left me falling and landing inside my grave I know that you want me dead,I take prescriptions to make me feel a-okay I know it\'s all in my head I have these lucid dreams where I can\'t move a thing Thinking of you in my bed',
    source: '– Juice World',
  },
  {
    quote: 'You were my everything Thoughts of a wedding ring Now I\'m just better off dead (Uh, uh, uh)',
    source: '– Juice World',
  },
];
/***
 * `getRandomQuote` function
***/
function getRandomQuote (quote) {
  var randomNumber = Math.floor(Math.random() * quotes.length );
  console.log(`random itteration Generated ${randomNumber}`); // This is a test to make sure getRandomQuote is working
  return quote[randomNumber];
 
}
function generateQuoteString (quoteArray) {
  var tempArray = quoteArray;
  var quoteString = '<p class="quote">' + tempArray.quote + '</p>';
  quoteString += '<p class="source">' + tempArray.source + '</p>'
  console.log(` random string generated: ${quoteString}`); // This is a test to make sure everything is working properly
  return quoteString;
}
function printQuotes (quoteDisplay) {
  var outputQuote_Box = document.getElementById('quote-box');
  outputQuote_Box.innerHTML = quoteDisplay;
}

/***
 * `printQuote` function
***/
function printQuote (quoteDisplay) {
  var testArray = [];
  var stringArray;
  testArray = getRandomQuote(quotes);
  stringArray = generateQuoteString(testArray);
  console.log('Everythingcomplied fine..Complete.'); // This is a test to make everything complied correctly. 
  printQuotes(stringArray);
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);