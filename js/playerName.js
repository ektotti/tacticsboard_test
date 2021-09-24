let playerNameInput = document.querySelectorAll('.playerSet__name');
let playerNumInput = document.querySelectorAll('.playerSet__num');
let setButton = document.querySelector(".playerSet__button");
let playerName = document.querySelectorAll('.player__name');
let playerNum = document.querySelectorAll('.player__icon');

setButton.addEventListener("click" ,playerSet);

function playerSet(event){
    for(i=0; i<19; i++){
        playerName[i].textContent = playerNameInput[i].value
        playerNum[i].textContent = playerNumInput[i].value
    }
}

