//target body to change color

//on mouse press

const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

//make colors array to change colors through
const colors = ['yellow', 'red', 'orange', 'green', 'blue', 'indigo', 'violet,', '#3B5998', 'white', 'black'];

function changeColor() {
    let random = Math.floor(Math.random() * colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}

//target button mouse press
colorBtn.addEventListener('click', changeColor);