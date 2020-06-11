//add js here
let parent = document.getElementById('gamelist')
let newGame = document.createElement('div')
let newGameText = document.createElement('p')
let newGameText1 = document.createElement('p')
let newGameText2 = document.createElement('p')



let newGame2 = document.createElement('div')
let newGame2Text = document.createElement('p')
let newGame2Text1 = document.createElement('p')
let newGame2Text2 = document.createElement('p')


newGame2Text.innerText = 'This is a new game';
newGame2Text1.innerText = 'played';
newGame2Text2.innerText = 'finished';
newGame2.appendChild(newGame2Text);
newGame2.appendChild(newGame2Text1);
newGame2.appendChild(newGame2Text2);
parent.appendChild(newGame2);

newGameText.innerText = 'This is a new game';
newGameText1.innerText = 'played';
newGameText2.innerText = 'finished';
console.log(parent);
newGame.appendChild(newGameText);
newGame.appendChild(newGameText1);
newGame.appendChild(newGameText2);
parent.appendChild(newGame);

let form = document.querySelector('form');

form.onsubmit = function(e) {
    e.preventDefault();
    console.log (e);
    form.reset();
    //Handles function that will you be used when button is clicked


}


//event handler 