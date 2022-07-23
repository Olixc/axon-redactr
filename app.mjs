//showmenu dom manipulation
let showMenu = false;
const hamburger = document.querySelector('.header__bar--burger');
const nav = document.querySelector('.header__nav');
const menuNav = document.querySelector('.header__listContainer');
const navItems = document.querySelectorAll('.header__listItem');

//togglemenu dom manipulation
let showResult = false;
const appInputEl = document.querySelector('.app__input');
const appOutputEl = document.querySelector('.app__output');

function startApp() {

};
 
function toggleResult(){
    if(!showResult){
        // code to make the app do the scrambling here
        appInputEl.classList.add('hide');
        appOutputEl.classList.remove('hide');
        return showResult = true;
    } else {
        // code to return to default here
        appInputEl.classList.remove('hide');
        appOutputEl.classList.add('hide');
        return showResult = false;
    }
};
function toggleMenu () {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    return showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    return showMenu = false;
  }
}
  // ======= DO NOT EDIT ============== //
  export {startApp, toggleMenu, toggleResult};
  // ======= EEND DO NOT EDIT ========= //