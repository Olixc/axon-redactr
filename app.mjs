//showmenu dom manipulation
let showMenu = false;
const hamburger = document.querySelector('.header__bar--burger');
const nav = document.querySelector('.header__nav');
const menuNav = document.querySelector('.header__listContainer');
const navItems = document.querySelectorAll('.header__listItem');

//toggleresult dom manipulation
let showResult = false;
const appInputEl = document.querySelector('.app__input');
const appOutputEl = document.querySelector('.app__output');

function startApp() {

};
 
function toggleResult(e){
  e.preventDefault();
  if(!showResult){
      // code to make the app do the scrambling here
      appInputEl.classList.add('switch');
      appOutputEl.classList.remove('switch');
      return showResult = true;
  } else {
      // code to return to default here
      appInputEl.classList.remove('switch');
      appOutputEl.classList.add('switch');
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

function selectMenu(x){
  console.log('select changed');
  document.querySelectorAll('.header__link').forEach(list => {
    list.classList.remove('active');
  });
  if(x.target.classList.contains('header__link')){
    console.log('active');
    x.target.classList.add('active')
  }
}
  // ======= DO NOT EDIT ============== //
  export {startApp, toggleMenu, toggleResult, selectMenu};
  // ======= EEND DO NOT EDIT ========= //