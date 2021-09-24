const title = document.querySelectorAll('.formation__title');
const backsMenu = document.querySelectorAll('.formation__backsMenu');

const threeBTitle = document.querySelector('.formation__threeB--title');
const threeB = document.querySelector('.formation__threeB');
const threeBList = document.querySelector('.threeB__list');


const fourBTitle = document.querySelector('.formation__fourB--title');
const fourB = document.querySelector('.formation__fourB');
const fourBList = document.querySelector('.fourB__list');

const fiveBTitle = document.querySelector('.formation__fiveB--title');
const fiveB = document.querySelector('.formation__fiveB');
const fiveBList = document.querySelector('.fiveB__list');

for(let i = 0; i<2; i++){
    title[i].addEventListener('click', function(){
        backsMenu[i].classList.toggle('inview');
    });
}

threeBTitle.addEventListener('click', function(){
    threeB.classList.toggle('inview');
});

fourBTitle.addEventListener('click', function(){
    fourB.classList.toggle('inview');
});

fiveBTitle.addEventListener('click', function(){
    fiveB.classList.toggle('inview');
});