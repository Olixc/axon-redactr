function startApp() {
  //showmenu dom manipulation
  let showMenu = false;
  const hamburger = document.querySelector(".header__bar--burger");
  const nav = document.querySelector(".header__nav");
  const menuNav = document.querySelector(".header__listContainer");
  const navItems = document.querySelectorAll(".header__listItem");

  //toggleresult dom manipulation
  let showResult = false;
  const appInputEl = document.querySelector(".app__input");
  const appOutputEl = document.querySelector(".app__output");
  const inputTextEl = document.getElementById("input-text");
  const removeTextEl = document.getElementById("remove-text");
  const yourSymbolEl = document.getElementById("your-symbol");
  const resultEl = document.querySelector(".app__result--textarea");
  const scannedWordsEl = document.querySelector(".app__totalWords");
  const matchedWordsEl = document.querySelector(".app__totalMatch");
  const executionTimeEl = document.querySelector(".app__totalTime");
  const scrambledWordsEl = document.querySelector(".app__totalScrambled");
  const resultCloseBtn = document.querySelector("#close-result-btn");

  // showmenu event
  const menuBtn = document.querySelector(".header__bar");
  menuBtn.addEventListener("click", function () {
    console.log("clicked me");
    toggleMenu();
  });

  // toggleresult event
  // const resultBtns = document.querySelectorAll(".resultbtn");
  // resultBtns.forEach((resultBtn) => {
  //   resultBtn.addEventListener("click", function (e) {
  //     console.log("result page clicked");
  //     toggleResult(e);
  //   });
  // });

  // selectmenu event
  const listEl = document.querySelectorAll(".header__link");
  listEl.forEach((list) => {
    list.addEventListener("click", (e) => {
      console.log("clicked to select");
      console.log(e);
      selectMenu(e);
    });
  });

  // showResult event

  const redactBtn = document.querySelector(".redact__btn");
  const allInput = document.querySelectorAll(".redact__input");
  const textArea = document.querySelector("#input-text");
  const textToHide = allInput[0];
  const symbolToHide = allInput[1];
  let formObj = {
    mainTextInput: {
      value: "",
      error: false,
      el: document.querySelector("#input-text"),
    },
    textToHideInput: {
      value: "",
      error: false,
      el: allInput[0],
    },
    symbolToInput: {
      value: "",
      error: false,
      el: allInput[1],
    },
  };
  function animation(x) {
    x.classList.add("animate");
    setTimeout(function () {
      x.classList.remove("animate");
    }, 1000);
  }
  function validate(e) {
    // if (e.value.length === 0) {
    animation(e);
    e.style.borderColor = "red";
    e.classList.add("error");
    e.addEventListener("focus", function (e) {
      e.target.classList.remove("error");
      e.target.style.borderColor = "";
    });
    e.addEventListener("input", function (e) {
      e.target.classList.remove("error");
      e.target.style.borderColor = "";
    });
    // }
  }
  // function to remove duplicate words
  function removeDuplicates(arr) {
    let unique_array = [];
    for (let i = 0; i < arr.length; i++) {
      if (unique_array.indexOf(arr[i]) === -1) {
        unique_array.push(arr[i]);
      }
    }
    return unique_array;
  }
  let match = [];
  let result = null;
  let executionTime = null;

  //   function to check if the word to be hidden exits in the main texts
  function checkIfToHideWordExists(mainWord, toHideWord, symbolToChange) {
    // console.log({ mainWord, toHideWord, symbolToChange })
    // match = [];
    result = mainWord;
    let returnedBoolean = true;
    let textToHideClean = removeDuplicates(toHideWord.split(" "));
    textToHideClean.forEach((word) => {
      if (!mainWord.includes(word)) {
        returnedBoolean = false;
        return;
      }
    });
    return returnedBoolean;
  }
  // the main redact function
  function redactText(mainText, toHideText, symbolToChange) {
    let returnedBool = true;
    let textToHideClean = removeDuplicates(toHideText.split(" "));
    textToHideClean.forEach((word) => {
      // regex to match the all words and cremove ? from the end of the word
      let regex = new RegExp(`\\b${word}\\b`, "gi");
      if (mainText.match(regex)) {
        match.push(word);
        result = textArea.value.replace(
          regex,
          symbolToChange.repeat(word.length)
        );
      } else {
        returnedBool = false;
      }
    });
    match.forEach((word) => {
      let regex = new RegExp(`\\b${word}\\b`, "gi");
      result = result.replace(regex, symbolToHide.value.repeat(word.length));
    });
    return returnedBool;
    // let mainTextClean = removeDuplicates(mainText.split(" "));
    // let toHideTextClean = removeDuplicates(toHideText.split(" "));
    // let symbolToChangeClean = removeDuplicates(symbolToChange.split(" "));
    // let mainTextArray = mainTextClean.map((word) => {
    //   if (toHideTextClean.includes(word)) {
    //     match.push(word);
    //     return symbolToChangeClean[toHideTextClean.indexOf(word)];
    //   } else {
    //     return word;
    //   }
    // }).join(" ");
    // return mainTextArray;
  }
  // functio to analyse text result

  redactBtn.addEventListener("click", function (e) {
    e.preventDefault();
    formObj.mainTextInput.value = textArea.value;
    formObj.textToHideInput.value = textToHide.value;
    formObj.symbolToInput.value = symbolToHide.value;
    // console.log(
    //   checkIfToHideWordExists(
    //     formObj.mainTextInput.value,
    //     formObj.textToHideInput.value,
    //     formObj.symbolToInput.value
    //   )
    // );
    if (formObj.mainTextInput.value === "") {
      formObj.mainTextInput.error = true;
    } else {
      formObj.mainTextInput.error = false;
    }
    if (formObj.textToHideInput.value === "") {
      formObj.textToHideInput.error = true;
    } else if (
      !checkIfToHideWordExists(
        formObj.mainTextInput.value,
        formObj.textToHideInput.value,
        formObj.symbolToInput.value
      )
    ) {
      formObj.textToHideInput.error = true;
    } else {
      formObj.textToHideInput.error = false;
    }
    if (formObj.symbolToInput.value === "") {
      formObj.symbolToInput.error = true;
    } else {
      formObj.symbolToInput.error = false;
    }
    for (let key in formObj) {
      if (formObj[key].error) {
        validate(formObj[key].el);
        return;
      } else {
        textArea.classList.remove("alert__color");
      }
    }
    let start = performance.now();
    redactText(
      formObj.mainTextInput.value,
      formObj.textToHideInput.value,
      formObj.symbolToInput.value
    );
    let end = performance.now();
    let executionTime = (end - start).toFixed(2);
    executionTimeEl.innerHTML = `${executionTime}s`;
    let scrambled = [];
    let p = formObj.mainTextInput.value.replace(
      /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g,
      " "
    );
    console.log({ p });
    let words = p.split(" ");
    console.log({ words });
    let totalWords = formObj.mainTextInput.value.split(" ").length;
    scannedWordsEl.innerHTML = `${totalWords}`;
    match = new Set(match);
    matchedWordsEl.innerHTML = `${match.size}`;
    console.log(`match.length ${match.length}`);
    let textToHideClean = removeDuplicates(
      formObj.textToHideInput.value.split(" ")
    );
    for (let i = 0; i < words.length; i++) {
      if (textToHideClean.includes(words[i])) {
        scrambled.push(words[i]);
      }
    }
    console.log({ words, textToHideClean, scrambled, match }, textArea.value);
    scrambledWordsEl.innerHTML = `${scrambled.length}`;
    console.log(`scrambled.length ${scrambled}`);
    showResult = true;
    if (showResult) {
      appInputEl.classList.add("switch");
      appOutputEl.classList.remove("switch");
      resultEl.placeholder = result;
    } else {
      appInputEl.classList.remove("switch");
      appOutputEl.classList.add("switch");
    }
    console.log({ result });
    match = [];
  });
  const copyBtnEl = document.querySelector(".app__copyBtn");
  copyBtnEl.addEventListener("click", () => {
    copyText();
  });
  function copyText() {
    resultEl.select();
    resultEl.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(resultEl.placeholder);

    alert("Copied:");
  }
  // closeResult
  resultCloseBtn.addEventListener("click", function () {
    showResult = false;
    if (showResult) {
      appInputEl.classList.add("switch");
      appOutputEl.classList.remove("switch");
      resultEl.value = result;
    } else {
      appInputEl.classList.remove("switch");
      appOutputEl.classList.add("switch");
    }
    textArea.value = "";
    textToHide.value = "";
    symbolToHide.value = "";
  });

  function toggleMenu() {
    if (!showMenu) {
      hamburger.classList.add("open");
      nav.classList.add("open");
      menuNav.classList.add("open");
      navItems.forEach((item) => item.classList.add("open"));

      return (showMenu = true);
    } else {
      hamburger.classList.remove("open");
      nav.classList.remove("open");
      menuNav.classList.remove("open");
      navItems.forEach((item) => item.classList.remove("open"));

      return (showMenu = false);
    }
  }

  function selectMenu(x) {
    console.log("select changed");
    document.querySelectorAll(".header__link").forEach((list) => {
      list.classList.remove("active");
    });
    if (x.target.classList.contains("header__link")) {
      console.log("active");
      x.target.classList.add("active");
    }
  }
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
