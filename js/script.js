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
    source: 'Juice World',
    citation: 'twitter',
    year: 1996,
  },
  {
    quote: 'Easier said than done, I thought you were the one Listenin to my heart instead of my head',
    source: 'Juice World',
    citation: 'facebook',
    year: 2019,


  },
  {
    quote: 'You left me falling and landing inside my grave I know that you want me dead,I take prescriptions to make me feel a-okay I know it\'s all in my head I have these lucid dreams where I can\'t move a thing Thinking of you in my bed',
    source: 'Juice World',
    citation: 'instagram',
  
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
  var quoteString = '';
    quoteString += '<p class="quote">' + tempArray.quote + '</p>';
    quoteString += '<p class="source">' + tempArray.source;
    if (isNaN(tempArray.citation)) {
      console.log('Citation has been added to string!');
      quoteString += '<span class="citation">' + tempArray.citation + '</span>';
    }
    if (!isNaN(tempArray.year)) {
      console.log('');
      quoteString += '<span class="year">' + tempArray.year + '</span>';
    }
    quoteString += '</p>';
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
    printQuotes(stringArray);
    console.log('Everythingcomplied fine..Complete.'); // This is a test to make everything complied correctly. 
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);