import {startApp , toggleMenu} from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp); 


// showmenu dom manipulation
const menuBtn = document.querySelector('.header__bar');
menuBtn.addEventListener('click', function(){
    console.log("clicked");
    toggleMenu()
});

