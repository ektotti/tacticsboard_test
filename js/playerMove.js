const player = document.querySelectorAll('.player');
const player_icon = document.querySelectorAll('.player__icon');
const field = document.querySelector('.field');

let x;
let y;


for(let i = 0; i < 3; i++){
    
    player[i].ondragstart = function(event){
        return false;
      }

    player_icon[i].addEventListener("mousedown", OnMouseDown);
    
    function OnMouseDown(event){
        // console.log(this.offsetLeft);
        this.classList.add('mouseDowned');
        x = event.pageX - player[i].offsetLeft;
        y = event.pageY - player[i].offsetTop;
    
        field.addEventListener("mousemove", OnMouseMove);
    }
    
    function OnMouseMove(event){
        let mouseDowned = document.querySelector(".mouseDowned");
    
        player[i].style.top = event.pageY - y + "px";
        player[i].style.left = event.pageX - x + "px";
    
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

}