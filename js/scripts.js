//add js here
let parent = document.getElementById('gamelist')
let newGame = document.createElement('div')
let newGameText = document.createElement('p')
let newGameText1 = document.createElement('p')
let newGameText2 = document.createElement('p')
let newGameButton = document.createElement('button')


let newGame2 = document.createElement('div')
let newGame2Text = document.createElement('p')
let newGame2Text1 = document.createElement('p')
let newGame2Text2 = document.createElement('p')
let newGame2Button = document.createElement('button')

newGame2Text.innerText = 'This is a new game';
newGame2Text1.innerText = 'played';
newGame2Text2.innerText = 'finished';
newGame2Button.innerText = 'x';
newGame2.appendChild(newGame2Text);
newGame2.appendChild(newGame2Text1);
newGame2.appendChild(newGame2Text2);
newGame2.appendChild(newGame2Button);
parent.appendChild(newGame2);

newGameText.innerText = 'This is a new game';
newGameText1.innerText = 'played';
newGameText2.innerText = 'finished';
newGameButton.innerText = 'x';
console.log(parent);
newGame.appendChild(newGameText);
newGame.appendChild(newGameText1);
newGame.appendChild(newGameText2);
newGame.appendChild(newGameButton);
parent.appendChild(newGame);








let expandButton = document.getElementById('fixedbutton')
let form = document.querySelector('form');
let gameTitle = document.getElementById('gametitle');
let isPlayed = document.getElementById('played');
let isFinished = document.getElementById('finished');
let gameForm = document.getElementById('gameForm');
console.log (gameForm);

function collaspe(){
    if (gameForm.classList.contains('gameform')) {
        gameForm.classList.remove('gameform');
        gameForm.classList.add('gameformC')
} else {
    gameForm.classList.remove('gameformC')
    gameForm.classList.add('gameform');
}
}
expandButton.addEventListener('click',collaspe)

//GAME LIBRARY
let gameLibrary = [];
function Game(name,played,finished){
    this.name = name,
    this.played = played,
    this.finished = finished
}



form.onsubmit = function(e) {
    e.preventDefault();
    console.log (e);
    let gameName = gameTitle.value;
    let playStatus = isPlayed.checked;
    let finishedStatus = isFinished.checked;
    let played;
    let finished;
    console.log (isPlayed.checked);
    console.log (isFinished.checked);
    if(playStatus === true){
        played = 'Played'
    } else {
        played = 'not played'
    }
    if(finishedStatus === true){
        finished = 'Finished'
    } else {
        finished = 'Not Finished'
    }
    const NewGame = new Game(gameName,played,finished);
      gameLibrary.push(NewGame);
      console.log(gameLibrary);
      createNewGameElement(gameLibrary);d
    form.reset();
}
function createNewGameElement(arr){
    let libraryL = arr.length;
    for(let i = 0; i < libraryL; i++){
        let parent = document.getElementById('gamelist')
        let newGame = document.createElement('div')
        let newGameText = document.createElement('p')
        let newGameText1 = document.createElement('p')
        let newGameText2 = document.createElement('p')
        let newGameButton = document.createElement('button')
        newGameText.innerText = arr[i].name;
        newGameText1.innerText = arr[i].played;
        newGameText2.innerText = arr[i].finished;
        newGameButton.innerText = 'x';
        console.log(parent);
        newGame.appendChild(newGameText);
        newGame.appendChild(newGameText1);
        newGame.appendChild(newGameText2);
        newGame.appendChild(newGameButton);
        parent.appendChild(newGame);
    }
}

//event handler 