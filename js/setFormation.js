const player = document.querySelectorAll('.player');
const FORMATION = document.querySelectorAll('.formationNum');
let x;
let y;
for(let k = 0; k < FORMATION.length/2; k++ ){
    
    FORMATION[k].addEventListener("click", function(){ 
        let selectedSystem = FORMATION[k].id; 
        for(let i = 0; i < 11; i++){
            let classtName = player[i].className;
            const pattern = new RegExp(/three\d+[AB]|four\d+[AB]|five\d+[AB]/);
            let existingSystem = classtName.match(pattern);
            player[i].classList.remove(existingSystem);  
            player[i].classList.add(selectedSystem);  
        }
    });
    
}

for(let k = FORMATION.length/2; k < FORMATION.length; k++ ){
    
    FORMATION[k].addEventListener("click", function(){ 
        let selectedSystem = FORMATION[k].id; 
        for(let i = 19; i < 30; i++){
            let classtName = player[i].className;
            const pattern = new RegExp(/three\d+[AB]|four\d+[AB]|five\d+[AB]/);
            let existingSystem = classtName.match(pattern);
            player[i].classList.remove(existingSystem);  
            player[i].classList.add(selectedSystem);  
        }
    });
    
}