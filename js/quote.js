const simpleQuotes = [
    { name: 'Author 1', quote: 'Quote 1' },
    { name: 'Abraham Lincoln', quote: "I'm, a success today because I had a friend who believed in me and I didn't have the heart to let him down." },
    { name: 'Author 2', quote: 'Quote 2' },
    { name: 'Stephen King', quote: 'Get busy living or get busy dying' },
    { name: 'John F. Kennedy', quote: 'Those who dare to fail miserably can achieve greatly.' },
    { name: 'Leonardo Da Vinci', quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happend to things.' },
    { name: 'Author 3', quote: 'Quote 3' },
    { name: 'Author 4', quote: 'Quote 4' }
]

//target everything?
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

//random number used for index to select quote object from array
function displayQuote() {
    let number = Math.floor(Math.random() * simpleQuotes.length);
    quoteAuthor.innerHTML = simpleQuotes[number].name;
    quote.innerHTML = simpleQuotes[number].quote;

}