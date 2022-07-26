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
const inputText = document.getElementById("input-text");
const removeText = document.getElementById("remove-text");
const yourSymbol = document.getElementById('your-symbol')
const resultEl = document.querySelector('.app__result--textarea');




function startApp() {

};
 
function toggleResult(e){
  e.preventDefault();
  if(!showResult){
    appInputEl.classList.add('switch');
    appOutputEl.classList.remove('switch');
      // code to make the app do the scrambling here
    let input1= inputText.value;
    let input2= removeText.value;
    let input3= yourSymbol.value;

    console.log("input1", input1);
    console.log("input2", input2);

    const inputArray1 = input1.split(" ");
    const inputArray2 = input2.split(" ");

    let result = [];

    let input2Map = new Map();

    for (const word of inputArray2) {
      input2Map.set(word, word);
    }

    for (const word of inputArray1) {
      if (!input2Map.has(word)) {
        result.push(word);
      } else {
        length = word.length;
        let scrambled = Array(length).fill(input3.slice(0, 1)).join("");
        result.push(scrambled);
      }
    }
    result = result.join(' ');
    console.log("result", result)
    resultEl.placeholder = result;

    return showResult = true;
  } else {
    // code to return to default here
    inputText.value= '';
    removeText.value= '';
    yourSymbol.value= '';
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