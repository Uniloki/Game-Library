

let expandButton = document.getElementById('fixedbutton')
let form = document.querySelector('form');
let gameTitle = document.getElementById('gametitle');
let isPlayed = document.getElementById('played');
let isFinished = document.getElementById('finished');
let gameForm = document.getElementById('gameForm');
let allDeleteButtons;
console.log (gameForm);
//Simple code that changes the plus to and X when the collapsible opens.
function toggleButton() {
    if(expandButton.textContent === '+'){
        expandButton.textContent = 'X';
    } else{
        expandButton.textContent = '+';
    }
}

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
expandButton.addEventListener('click',toggleButton)
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
    createNewGameElement(gameLibrary);
    form.reset();
}
function createNewGameElement(arr){
    let libraryL = arr.length;
        let parent = document.getElementById('gamelist')
        let newGame = document.createElement('div')
        let newGameText = document.createElement('p')
        let newGameText1 = document.createElement('p')
        let newGameText2 = document.createElement('p')
        let newGameButton = document.createElement('button')
        newGame.setAttribute("class",`data${libraryL-1}`);
        newGameText.innerText = arr[libraryL-1].name;
        newGameText1.innerText = arr[libraryL-1].played;
        newGameText2.innerText = arr[libraryL-1].finished;
        newGameButton.innerText = 'x';
        newGameButton.setAttribute("data",libraryL-1);
        newGameButton.setAttribute('class',"deletebutton");
        console.log(parent);
        newGame.appendChild(newGameText);
        newGame.appendChild(newGameText1);
        newGame.appendChild(newGameText2);
        newGame.appendChild(newGameButton);
        parent.appendChild(newGame);

        allDeleteButtons = document.querySelectorAll('.deletebutton');
        console.log(allDeleteButtons)
        allDeleteButtons.forEach(function(elem) {
            elem.addEventListener("click", function() {
                let removedVal = this.getAttribute('data');
                let removedItem = document.querySelector(`.data${removedVal}`)
                parent.removeChild(removedItem);
            });
        });
}




//Collapse 





