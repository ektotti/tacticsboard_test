class OnClickMove{
    constructor(el){
        this.els = document.querySelectorAll(el);
        this.field = document.querySelector('.field');
    }
    
    _onMouseDown(event){
        const target = event.target;
        target.classList.add('mouseDowned');
        this.x = event.pageX - event.target.offsetLeft;
        this.y = event.pageY - event.target.offsetTop;
        // target.style.backgroundColor = 'black'
        this.field.addEventListener("mousemove", this._onMouseMove.bind(this));
    }

    _onMouseMove(event){
        // let mouseDowned = document.querySelector(".mouseDowned");
        const target = document.querySelector('.mouseDowned');
        if(target){
            target.style.top = event.pageY - this.y + "px";
            target.style.left = event.pageX - this.x + "px";
            target.addEventListener("mouseup", this._onMouseUp.bind(this));
        }else{
        this.field.removeEventListener("mousemove", this._onMouseMove.bind(this));
        }
    }

    _onMouseUp(){
        // let mouseDowned = document.querySelector(".mouseDowned");
        this.field.removeEventListener("mousemove", this._onMouseMove.bind(this));
        const target = document.querySelector('.mouseDowned');
        if(target){
            target.removeEventListener("mousedown", this._onMouseDown.bind(this));
            target.classList.remove("mouseDowned");
        }
        // target.removeEventListener("mouseup", this._onMouseUp.bind(this));
    }

    move(){
        this.els.forEach(function(el){
            el.ondragstart = function(event){
                return false;
                }
            el.addEventListener("mousedown", this._onMouseDown.bind(this));
        }, this)
            
    }

}
