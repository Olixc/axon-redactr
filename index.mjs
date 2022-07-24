import {startApp , toggleMenu, toggleResult, selectMenu} from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp); 


// showmenu dom manipulation
const menuBtn = document.querySelector('.header__bar');
menuBtn.addEventListener('click', function(){
    console.log("clicked");
    toggleMenu()
});

//toggleresult dom manipulation
const resultBtns = document.querySelectorAll('.btn');
resultBtns.forEach(resultBtn => {
  resultBtn.addEventListener('click', function(e){
    console.log('result page clicked');
    toggleResult(e);
  })
})

// selectmenu dom manipulation
const listEl =document.querySelectorAll('.header__link')
listEl.forEach(list => {
  list.addEventListener('click', (e) => {
    console.log('clicked to select')
    console.log(e)
    selectMenu(e);
  })
})



