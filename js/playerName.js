let playerName = document.querySelector('.player__name');
let nameInpBtn = document.querySelector('.player__name--button')
let nameInput = document.querySelector('#playerName');

playerName.addEventListener('click', inputPlayerName);
nameInpBtn.addEventListener('click', setPlayerName);

// formのクラスにinvieを追加して入力欄を出現させる。
function inputPlayerName(event){
    let nameSet = document.querySelector('.player__name--set')
    nameSet.classList.add('inview');
}

// formの内容をsubmitして、その内容を対象spanタグのtextContentに代入
function setPlayerName(event){
    let inputValue = nameInput.value;
    if(inputValue == ""){
        playerName.textContent = "player1";  
    }else{
        playerName.textContent = inputValue;
    }

    inputValue = "";
    let nameSet = document.querySelector('.player__name--set')
    nameSet.classList.remove('inview');
}

