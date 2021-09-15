let playerName = document.querySelectorAll('.player__name');
let nameInpBtn = document.querySelector('.player__name--button')
let nameInput = document.querySelector('#playerName');

for(let i = 0; i < 3; i++){

    playerName[i].addEventListener('click', inputPlayerName);

}

nameInpBtn.addEventListener('click', setPlayerName);

// formのクラスにinviewを追加して入力欄を出現させる。
function inputPlayerName(event){
    this.classList.add('edited');
    let nameSet = document.querySelector('.player__name--set')
    nameSet.classList.add('inview');

}
    
// formを入力して、その内容をclickイベントで対象spanタグのtextContentに代入
function setPlayerName(event){
    let editedPlayer = document.querySelector('.edited');
    console.log(editedPlayer);
    let inputValue = nameInput.value;
    if(inputValue == ""){
        editedPlayer.textContent = "player";  
    }else{
        editedPlayer.textContent = inputValue;
    }

    inputValue = "";
    let nameSet = document.querySelector('.player__name--set')
    nameSet.classList.remove('inview');
    editedPlayer.classList.remove('edited');

}



