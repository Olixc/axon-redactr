function startApp() {
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
  const inputTextEl = document.getElementById("input-text");
  const removeTextEl = document.getElementById("remove-text");
  const yourSymbolEl = document.getElementById('your-symbol')
  const resultEl = document.querySelector('.app__result--textarea');
  const scannedWordsEl = document.querySelector(".app__totalWords");
  const matchedWordsEl = document.querySelector(".app__totalMatch");
  const executionTimeEl = document.querySelector(".app__totalTime");
  const scrambledWordsEl = document.querySelector(".app__totalScrambled");
  
  // showmenu event
  const menuBtn = document.querySelector('.header__bar');
  menuBtn.addEventListener('click', function(){
      console.log("clicked");
      toggleMenu()
  });

  //toggleresult event
  const resultBtns = document.querySelectorAll('.resultbtn');
  resultBtns.forEach(resultBtn => {
    resultBtn.addEventListener('click', function(e){
      console.log('result page clicked');
      toggleResult(e);
    })
  })

  // selectmenu event
  const listEl =document.querySelectorAll('.header__link')
  listEl.forEach(list => {
    list.addEventListener('click', (e) => {
      console.log('clicked to select')
      console.log(e)
      selectMenu(e);
    })
  })

  // copytext event 
  const copyBtnEl = document.querySelector(".app__copyBtn");
  copyBtnEl.addEventListener("click", () => {
    copyText()
  })

  function showScrambled (input1, input2, input3){
    // code to make the app do the scrambling here  
    let result = [];
    input1.toLowerCase();
    input2.toLowerCase();

    const inputArray1 = input1.split(" ");
    const inputArray2 = input2.split(" ");

    let scannedWords = inputArray1.length;
    let matchWords = inputArray2.length;
    let scrambledWords = inputArray2.length;

    scannedWordsEl.innerHTML = `${scannedWords}`;
    matchedWordsEl.innerHTML = `${matchWords}`;
    scrambledWordsEl.innerHTML = `${scrambledWords}`;

   console.log(scannedWords, matchWords, scrambledWords);

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
    // switch page
    appInputEl.classList.add('switch');
    appOutputEl.classList.remove('switch');

  }

  function clearScrambled (){
    inputTextEl.value= null;
    removeTextEl.value= null;
    yourSymbolEl.value= null;
    appInputEl.classList.remove('switch');
    appOutputEl.classList.add('switch');
  }

  function toggleResult(e){
    e.preventDefault();

    let input1= null;
    let input2= null;
    let input3= null;

    input1= inputTextEl.value;
    input2= removeTextEl.value;
    input3= yourSymbolEl.value;

    if( !input1 || !input2 || !input3 ){
      inputTextEl.classList.add("alert__color");
      removeTextEl.classList.add("alert__color");
      yourSymbolEl.classList.add("alert__color");
      return
    };

    inputTextEl.classList.remove("alert__color");
    removeTextEl.classList.remove("alert__color");
    yourSymbolEl.classList.remove("alert__color");

    if(!showResult){
      {
        let start = performance.now();
        showScrambled(input1, input2, input3);
        let end = performance.now();
        let executionTime = (end - start).toFixed(2);
        executionTimeEl.innerHTML = `${executionTime}s`;
      }
      return showResult = true;
    } else {
      // code to return to default here
      clearScrambled();
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

  function copyText() {
 
    resultEl.select();
    resultEl.setSelectionRange(0, 99999); /* For mobile devices */
  
    navigator.clipboard.writeText(resultEl.placeholder);

    alert("Copied: " + resultEl.placeholder);
  }
};
 



  // ======= DO NOT EDIT ============== //
  export default startApp
  // ======= EEND DO NOT EDIT ========= //