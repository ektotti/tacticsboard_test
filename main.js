

    const player = document.querySelectorAll('.player');
    const field = document.querySelector('.field');
    
    let x;
    let y;
    
    player.ondragstart = function(event){
        return false;
      }

      for(let i = 0; i < 3; i++){
          player[i].addEventListener("mousedown", OnMouseDown);
      }
    
    function OnMouseDown(event){
        // console.log(this.offsetLeft);
        this.classList.add('mouseDowned');
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        field.addEventListener("mousemove", OnMouseMove);
    }
    
    function OnMouseMove(event){
        let mouseDowned = document.querySelector(".mouseDowned");

        mouseDowned.style.top = event.pageY - y + "px";
        mouseDowned.style.left = event.pageX - x + "px";
    
        mouseDowned.addEventListener("mouseup", OnMouseUp);
        this.addEventListener("mouseup", OnMouseUp);
    }
    
    function OnMouseUp(){
        let mouseDowned = document.querySelector(".mouseDowned");

        this.removeEventListener("mousemove", OnMouseMove);
        mouseDowned.removeEventListener("mousedown", OnMouseMove);
        this.removeEventListener("mouseup", OnMouseUp);

        mouseDowned.classList.remove("mouseDowned");
    }