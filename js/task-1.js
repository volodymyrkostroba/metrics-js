const textRef = document.querySelector('.text');
const resulRef = document.querySelector('.result');
const btnRef = document.querySelector('.task-1 > button');
const scrollBtnRef = document.querySelector('.scroll-to');
const task2Ref = document.querySelector('.task-2');
const task1Ref = document.querySelector('.task-1');
const scrollUpBtn = document.querySelector('.task-2 > button');



textRef.addEventListener('scroll', function (e) {
    

    resulRef.textContent = Math.round(e.target.scrollTop);

});


// прокрутка к началу секции

scrollBtnRef.addEventListener('click', function (e) {
    window.scrollTo(0,task1Ref.clientHeight)
    
});





// прокрутка вверх элемента

document.addEventListener('click', function (e) {
   if(textRef.scrollTop === 0){
    
    return
   }

    textRef.scrollTop = 0;
});




// прокрутка вверх боди

document.addEventListener('click', function (e) {
    window.scrollTo(0,0)
});