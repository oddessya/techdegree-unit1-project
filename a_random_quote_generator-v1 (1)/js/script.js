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
// Created an array of objects with the quote, source, citation, and year properties
let quotes = [
    { 
      quote: 'Education is the most powerful weapon which you can use to change the world.',
      source:'Nelson Mandela',
      year:2003

  },
    { 
      quote:'Hold fast to dreams for if dreams die life is a broken winged bird that cannot fly', 
      source: 'Langston Hughes'

  },
    { 
      quote:'Instead pursue the things you love doing and then do them so well that people cant take their eyes off you.', 
      source: 'Maya Angelou', 
      citation:'I Know Why the Caged Bird Sings'

  },
    { 
      quote:'There is no such thing as failure. Failure is just life trying to move us in another direction.', 
      source:'Oprah Winfrey'

  },
    { 
      quote:'If there is no struggle, there is no progress.', 
      source:'Frederick Douglass'

  }
];
console.log(quotes);

/***
 * `getRandomQuote` function pulls the random quotes from the array of objects.
***/
// created the getRandomQuote function that selects and returns a random quote object from the options above

function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * quotes.length); 
  return quotes[quoteIndex];
}
console.log(getRandomQuote());


/***
 * `printQuote` function
***/
//create a variable that calls the getRandomQuote() function
//created a variable ti unutuate the HTML string
function printQuote(message) {
  var result = getRandomQuote();
  var message = <><p class="quote">result.quote</p><p class='source'>" + result.source + "</p><span class="citation">result.citation</span><span class="year">result.year</span></>
  "</p>";
  document.getElementById('quote-box').innerHTML = 'message';
}
// the user clicks the "Show another quote" button which allows the printQuote function to generate a new quote on the page by calling the function





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);