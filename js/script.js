/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * This is an array containing quotes and their citation information. 
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
    quote: `This is not 'RuPaul's Best Friends Race'!`,
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
 * This is a function that will return a array element from an array passed to it. 
 * It is used to get a random quote from the 'quotes' array. 
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

/***
 * This function prints a quote from the getRandomQuote function to the browser. 
***/

for ( let i = 0; i > 3; i++) {

}

function getHue() {
  return ( Math.floor( Math.random() * 255 ) );
}

function getColorValue() {
  return ( `rgb(${getHue()}, ${getHue()}, ${getHue()})` );
}

console.log(getColorValue);

setInterval(printQuote, 5000);
// document.body.style.backgroundColor = getRandomColor;

function printQuote() {
  // const getRandomColor = ( `rgb(${getColorValue()}, ${getColorValue()}, ${getColorValue()})`);
  const getRandomColor = getColorValue();
  document.body.style.backgroundColor = getRandomColor;

  const randomQuote = getRandomQuote( quotes );
  let html = `<p class="quote">${randomQuote.quote}</p>`
  
  html +=`<p class="source">${randomQuote.source}`
  
  if ( randomQuote.citation ) {
    html +=`<span class="citation">${randomQuote.citation}</span>`
  }

  if ( randomQuote.year ) {
    html += `<span class="year">${randomQuote.year}</span>`
  }

  if ( randomQuote.image ) {
    html += `<br><br><span class="image"><img src="${randomQuote.image}" alt="${randomQuote.source}" 
      style="float:right; width:100px; height:100px; border-radius:4%; border: 3px solid white"></span>`
  }

  html += `</p>`
  
  return document.getElementById('quote-box').innerHTML = html;
}

document.getElementById('quote-box').innerHTML = printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);