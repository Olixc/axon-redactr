let showMenu = false;
const hamburger = document.querySelector('.header__bar--burger');
const nav = document.querySelector('.header__nav');
const menuNav = document.querySelector('.header__listContainer');
const navItems = document.querySelectorAll('.header__listItem');

function startApp() {
  const menuBtn = document.querySelector('.header__bar');
  menuBtn.addEventListener('click', function(){
    console.log("clicked");
    toggleMenu()
  });
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
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //