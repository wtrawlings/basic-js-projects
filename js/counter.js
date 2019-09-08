let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCounterBtn');
const lowerCount = document.querySelector('#lowerCounterBtn');

let count = 0;


addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

function incrementCounter() {
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML > 0) {
        counter.style.color = '#4caf50';
    } else if (counter.innerHTML === 0) {
        counter.style.color = 'white';
    } else { counter.style.color = 'red' }
}



function decrementCounter() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML > 0) {
        counter.style.color = '#4caf50';
    } else if (counter.innerHTML === 0) {
        counter.style.color = 'white';
    } else { counter.style.color = 'red' }
}