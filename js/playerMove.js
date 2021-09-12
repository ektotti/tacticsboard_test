const player = document.querySelector('.player');
const player_icon = document.querySelector('.player__icon');
const field = document.querySelector('.field');

let x;
let y;

player.ondragstart = function(event){
    return false;
  }

player_icon.addEventListener("mousedown", OnMouseDown);

function OnMouseDown(event){
    // console.log(this.offsetLeft);
    this.classList.add('mouseDowned');
    x = event.pageX - player.offsetLeft;
    y = event.pageY - player.offsetTop;

    field.addEventListener("mousemove", OnMouseMove);
}

function OnMouseMove(event){
    let mouseDowned = document.querySelector(".mouseDowned");

    player.style.top = event.pageY - y + "px";
    player.style.left = event.pageX - x + "px";

    mouseDowned.addEventListener("mouseup", OnMouseUp);
}

function OnMouseUp(){
    let mouseDowned = document.querySelector(".mouseDowned");
    console.log(mouseDowned);

    field.removeEventListener("mousemove", OnMouseMove);
    mouseDowned.removeEventListener("mousedown", OnMouseMove);
    this.removeEventListener("mouseup", OnMouseUp);

    mouseDowned.classList.remove("mouseDowned");
}