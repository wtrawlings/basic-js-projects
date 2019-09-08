let counter = document.querySelector('.counter');
const addCont = document.querySelector('#addCountBtn');
const lowerCont = document.querySelector('#lowerCountBtn');

let count = 0;
addCont.addEventListener('click', incrementCounter);
lowerCont.addEventListener('click', decrementCounter);