import {startApp , toggleMenu, toggleResult} from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp); 


// showmenu dom manipulation
const menuBtn = document.querySelector('.header__bar');
menuBtn.addEventListener('click', function(){
    console.log("clicked");
    toggleMenu()
});

//togglemenu dom manipulation
const resultBtns = document.querySelectorAll('.btn');
resultBtns.forEach(resultBtn => {
  resultBtn.addEventListener('click', function(){
    console.log('result page click');
    toggleResult();
  })
})



