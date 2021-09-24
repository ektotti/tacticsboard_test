const title = document.querySelectorAll('.formation__title');
const backsMenu = document.querySelectorAll('.formation__backsMenu');

const threeBTitle = document.querySelectorAll('.formation__threeB--title');
const threeB = document.querySelectorAll('.formation__threeB');
const threeBList = document.querySelectorAll('.threeB__list');


const fourBTitle = document.querySelectorAll('.formation__fourB--title');
const fourB = document.querySelectorAll('.formation__fourB');
const fourBList = document.querySelectorAll('.fourB__list');

const fiveBTitle = document.querySelectorAll('.formation__fiveB--title');
const fiveB = document.querySelectorAll('.formation__fiveB');
const fiveBList = document.querySelectorAll('.fiveB__list');

for(let i = 0; i<2; i++){
    title[i].addEventListener('click', function(){
        backsMenu[i].classList.toggle('inview');
    });
    threeBTitle[i].addEventListener('click', function(){
        threeB[i].classList.toggle('inview');
    });
    
    fourBTitle[i].addEventListener('click', function(){
        fourB[i].classList.toggle('inview');
    });
    
    fiveBTitle[i].addEventListener('click', function(){
        fiveB[i].classList.toggle('inview');
    });
}
