const player = document.querySelectorAll('.player');
const player_icon = document.querySelectorAll('.player__icon');
const field = document.querySelector('.field');
const FORMATION = document.querySelectorAll('.formationNum');


let x;
let y;


for(let i = 0; i < 38; i++){
    
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

for(let k = 0; k < FORMATION.length; k++ ){
    FORMATION[k].addEventListener("click", function(){ 
        let selectedSystem = FORMATION[k].id; 
        for(let i2 = 0; i2 < 38; i2++){
            let classtName = player[i2].className;
            const pattern = new RegExp(/three\d+|four\d+|five\d+/);
            let existingSystem = classtName.match(pattern);
            player[i2].classList.remove(existingSystem);  
            player[i2].classList.add(selectedSystem);  
        }
    });
}