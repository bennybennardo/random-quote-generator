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
    quote: `Not today, Satan. Not today.`,
    source: 'Bianca del Rio',
    citation: 'Drag Race, Season 6',
    year: 2014,
    image: 'images/bianca-del-rio.jpg'
  },
  {
    quote: `Miss Vaaaanjie... Miss Vaaaaaaanjie... Miss Vaaaanjie.`,
    source: 'Vanessa Vanjie Mateo',
    citation: 'Drag Race, Season 10',
    year: 2018,
    image: 'images/vanessa-vanjie-mateo.jpg'
  },
  {
    quote: `This is no 'RuPaul's Best Friends Race'!`,
    source: 'Lashauwn Beyond',
    citation: 'Drag Race, Season 4',
    year: 2012,
    image: 'images/lashauwn-beyond.jpg'
  },
  {
    quote: `I'd like to keep it on, please.`,
    source: 'Valentina',
    citation: 'Drag Race, Season 9',
    year: 2017,
    image: 'images/valentina.jpg'
  },
  {
    quote: `Look how orange you look, girl!`,
    source: 'Alyssa Edwards',
    citation: 'Drag Race, Season 5',
    year: 2013,
    image: 'images/alyssa-edwards.jpg'
  }
]

/***
 * `getRandomQuote` function
***/

// for ( let i = 0; i < quotes.length; i++ ) {
//   let quote = quotes[i].quote;
//   let source = quotes[i].source;
//   let citation = quotes[i].citation;
//   let year = quotes[i].year;
//   let image = quotes[i].image
// }

function getRandomQuote( arr ) {
  const randomNumber = Math.floor( Math.random() * arr.length );
  let randomQuote = arr[randomNumber];
  return randomQuote;
}

console.log( getRandomQuote( quotes ) );

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);