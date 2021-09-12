let playerName = document.querySelector('.player__name');
let nameInputForm = document.querySelector('.player__name--form')
let nameInput = document.querySelector('#playerName');

playerName.addEventListener('click', inputPlayerName);
nameInputForm.addEventListener('submit', setPlayerName);

// formのクラスにinvieを追加して入力欄を出現させる。
function inputPlayerName(event){
    nameInputForm.classList.add('inview');
}

// formの内容をsubmitして、その内容を対象spanタグのtextContentに代入
function setPlayerName(event){
    let inputValue = nameInput.value;
    playerName.textContent = inputValue;
}

