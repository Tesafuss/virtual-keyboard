
export function listenerKey() {
  const BTN = Array.from(document.querySelectorAll(".btn"));

  document.addEventListener("keydown", (event) => pressKey(event));
  document.addEventListener("keyup", (event) => releaseKey(event));

  BTN.map((element) => {
    element.addEventListener("click", (event) => clickKey(event, element, BTN));
  });
}

function pressKey(event) {
  const BTN = Array.from(document.querySelectorAll(".btn"));
  let textarea = document.querySelector(".textarea");
  let key = event.key;

  switch (key) {
    case " ":
      pressSpace(event, textarea, BTN);
      break;
    case "Enter":
      pressEnter(event, textarea, BTN);
      break;
    case "Tab":
      pressTab(event, textarea, BTN);
      break;
    case "Control":
      pressCtrl(event, textarea, BTN);
      break;
    case "Alt":
      pressAlt(event, textarea, BTN);
      break;
    case "Meta":
      pressWin(event, textarea, BTN);
      break;
    case "CapsLock":
      pressCapsLock(event, textarea, BTN);
      break;
    case "Backspace":
      pressBackspace(event, textarea, BTN);
      break;
    case "Delete":
      pressDelete(event, textarea, BTN);
      break;
    case "Shift":
      pressShift(event, textarea, BTN);
      break;
    case "ArrowUp":
      clickArrowUp(event, BTN);
      break;
    case "ArrowDown":
      clickArrowDown(event, BTN);
      break;
    case "ArrowLeft":
      clickArrowLeft(event, BTN);
      break;
    case "ArrowRight":
      clickArrowRight(event, BTN);
      break;
    default:
      clickOtherBtn(event, textarea, BTN);
      break;
  }
}

function releaseKey(event) {
  const BTN = Array.from(document.querySelectorAll(".btn"));
  let textarea = document.querySelector(".textarea");
  let key = event.key;

  switch (key) {
    case " ":
      pressSpace(event, textarea, BTN);
      break;
    case "Enter":
      pressEnter(event, textarea, BTN);
      break;
    case "Tab":
      pressTab(event, textarea, BTN);
      break;
    case "Control":
      pressCtrl(event, textarea, BTN);
      break;
    case "Alt":
      pressAlt(event, textarea, BTN);
      break;
    case "Meta":
      pressWin(event, textarea, BTN);
      break;
    case "CapsLock":
      pressCapsLock(event, textarea, BTN);
      break;
    case "Backspace":
      pressBackspace(event, textarea, BTN);
      break;
    case "Delete":
      pressDelete(event, textarea, BTN);
      break;
    case "Shift":
      pressShift(event, textarea, BTN);
      break;
    case "ArrowUp":
      clickArrowUp(event, BTN);
      break;
    case "ArrowDown":
      clickArrowDown(event, BTN);
      break;
    case "ArrowLeft":
      clickArrowLeft(event, BTN);
      break;
    case "ArrowRight":
      clickArrowRight(event, BTN);
      break;
    default:
      clickOtherBtn(event, textarea, BTN);
      break;
  }
}

function clickKey(event, element, BTN) { 
  let textarea = document.querySelector(".textarea");
  let key = element.textContent;

  switch (key) {
    case "Space":
      clickSpace(event, textarea, BTN);
      break;
    case "Enter":
      clickEnter(event, textarea, BTN);
      break;
    case "Tab":
      clickTab(event, textarea, BTN);
      break;
    case "Ctrl":
      clickCtrl(event, textarea, BTN);
      break;
    case "Alt":
      clickAlt(event, textarea, BTN);
      break;
    case "Win":
      clickWin(event, textarea, BTN);
      break;
    case "CapsLock":
      clickCapsLock(event, textarea, BTN);
      break;
    case "Backspace":
      clickBackspace(event, textarea, BTN);
      break;
    case "Del":
      clickDelete(event, textarea, BTN);
      break;
    case "Shift":
      clickShift(event, textarea, BTN);
      break;
    case "ArrowUp":
      clickArrowUp(event, BTN);
      break;
    case "ArrowDown":
      clickArrowDown(event, BTN);
      break;
    case "ArrowLeft":
      clickArrowLeft(event, BTN);
      break;
    case "ArrowRight":  
      clickArrowRight(event, BTN);
      break;
    default:
      textarea.value += key;
      break;
  }
}

function clickSpace(event, textarea, BTN) {
  let number;
  BTN.map((elem, index) => {
    if (elem.textContent === "Space") {
      return (number = index);
    }
  });

    textarea.value = textarea.value.slice(0, textarea.selectionEnd) + " " + textarea.value.slice(textarea.selectionEnd);
}

function clickEnter(event, textarea, BTN) {
  let number;

  BTN.map((elem, index) => {
    if (elem.textContent === "Enter") {
      return (number = index);
    }
  });

    textarea.value =
      textarea.value.slice(0, textarea.selectionStart) + "\n" + textarea.value.slice(textarea.selectionStart);
}

function clickTab(event, textarea, BTN) {
  let number;
  BTN.map((elem, index) => {
    if (elem.textContent === "Tab") {
      return (number = index);
    }
  });

  if (event.type === "keydown") {
    textarea.value =
      textarea.value.slice(0, textarea.selectionStart) +
      "  " +
      textarea.value.slice(textarea.selectionStart);
    BTN[number].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[number].classList.remove("click");
  }
}

function clickCtrl(event, textarea, BTN) {
  let number = [];
  let index;

  BTN.map((elem, index) => {
    if (elem.textContent === "Ctrl") {
      number.push(index);
    }
  });

  if (event.code === "ControlLeft") {
    index = number[0];
  } else {
    index = number[1];
  }

  if (event.type === "keydown") {
    BTN[index].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[index].classList.remove("click");
  }
}

function clickAlt(event, textarea, BTN) {
  let number = [];
  let index;

  BTN.map((elem, index) => {
    if (elem.textContent === "Alt") {
      number.push(index);
    }
  });

  if (event.code === "AltLeft") {
    index = number[0];
  } else {
    index = number[1];
  }

  if (event.type === "keydown") {
    BTN[index].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[index].classList.remove("click");
  }
}

function clickWin(event, textarea, BTN) {
  let number;
  BTN.map((elem, index) => {
    if (elem.textContent === "Win") {
      return (number = index);
    }
  });
  if (event.type === "keydown") {
    BTN[number].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[number].classList.remove("click");
  }
}

function clickBackspace(event, textarea, BTN) {
  let number;
  BTN.map((elem, index) => {
    if (elem.textContent === "Backspace") {
      return (number = index);
    }
  });

  textarea.value = textarea.value.slice(0, textarea.selectionEnd-1);
}

function clickDelete(event, textarea, BTN) {
  let number;
  BTN.map((elem, index) => {
    if (elem.textContent === "Del") {
      return (number = index);
    }
  });
  
  textarea.value = textarea.value.slice(0, textarea.selectionEnd) + textarea.value.slice(textarea.selectionEnd+1);
}

function clickShift(event, textarea, BTN) {
  // if(event.target.textContent === "Shift") {
  //   event.target.classList.add("click");
  // }
}

function clickCapsLock(event, textarea, BTN) {
  let number;
  BTN.map((elem, index) => {
    if (elem.textContent === "CapsLock") {
      return (number = index);
    }
  });

  if (event.type === "keydown") {
    BTN[number].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[number].classList.remove("click");
  }
}

function clickOtherBtn(event, textarea, BTN) {
  let number;

  BTN.map((elem, index) => {
    if (elem.textContent === event.key) {
      return (number = index);
    }
  });

  if (event.type === "keydown") {
    BTN[number].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[number].classList.remove("click");
  }
}

function clickArrowUp(event, BTN) {
  if (event.key === "ArrowUp") {
    BTN.map((elem, index) => {
      if (elem.textContent === "\u2191") {
        if (event.type === "keydown") {
          let textarea = document.querySelector(".textarea");
          textarea.value += "\u2191";
          BTN[index].classList.add("click");
        }
        if (event.type === "keyup") {
          BTN[index].classList.remove("click");
        }
      }
    });
  }
}

function clickArrowDown(event, BTN) {
  if (event.key === "ArrowDown") {
    BTN.map((elem, index) => {
      if (elem.textContent === "\u2193") {
        if (event.type === "keydown") {
          let textarea = document.querySelector(".textarea");
          textarea.value += "\u2193";
          BTN[index].classList.add("click");
        }
        if (event.type === "keyup") {
          BTN[index].classList.remove("click");
        }
      }
    });
  }
}

function clickArrowRight(event, BTN) {
  if (event.key === "ArrowRight") {
    BTN.map((elem, index) => {
      if (elem.textContent === "\u2192") {
        if (event.type === "keydown") {
          let textarea = document.querySelector(".textarea");
          textarea.value += "\u2192";
          BTN[index].classList.add("click");
        }
        if (event.type === "keyup") {
          BTN[index].classList.remove("click");
        }
      }
    });
  }
}

function clickArrowLeft(event, BTN) {
  if (event.key === "ArrowLeft") {
    BTN.map((elem, index) => {
      if (elem.textContent === "\u2190") {
        if (event.type === "keydown") {
          let textarea = document.querySelector(".textarea");
          textarea.value += "\u2190";
          BTN[index].classList.add("click");
        }
        if (event.type === "keyup") {
          BTN[index].classList.remove("click");
        }
      }
    });
  }
}

function pressSpace(event, textarea, BTN) {
  let number;
  BTN.map((elem, index) => {
    if (elem.textContent === "Space") {
      return (number = index);
    }
  });

  if (event.type === "keydown") {
    BTN[number].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[number].classList.remove("click");
  }
}

function pressEnter(event, textarea, BTN) {
  let number;

  BTN.map((elem, index) => {
    if (elem.textContent === "Enter") {
      return (number = index);
    }
  });

  if (event.type === "keydown") {
    BTN[number].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[number].classList.remove("click");
  }
}

function pressTab(event, textarea, BTN) {
  let number;
  BTN.map((elem, index) => {
    if (elem.textContent === "Tab") {
      return (number = index);
    }
  });

  if (event.type === "keydown") {
    textarea.value =
      textarea.value.slice(0, textarea.selectionStart) +
      "  " +
      textarea.value.slice(textarea.selectionStart);
    BTN[number].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[number].classList.remove("click");
  }
}

function pressCtrl(event, textarea, BTN) {
  let number = [];
  let index;

  BTN.map((elem, index) => {
    if (elem.textContent === "Ctrl") {
      number.push(index);
    }
  });

  if (event.code === "ControlLeft") {
    index = number[0];
  } else {
    index = number[1];
  }

  if (event.type === "keydown") {
    BTN[index].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[index].classList.remove("click");
  }
}

function pressAlt(event, textarea, BTN) {
  let number = [];
  let index;

  BTN.map((elem, index) => {
    if (elem.textContent === "Alt") {
      number.push(index);
    }
  });

  if (event.code === "AltLeft") {
    index = number[0];
  } else {
    index = number[1];
  }

  if (event.type === "keydown") {
    BTN[index].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[index].classList.remove("click");
  }
}

function pressWin(event, textarea, BTN) {
  let number;
  BTN.map((elem, index) => {
    if (elem.textContent === "Win") {
      return (number = index);
    }
  });
  if (event.type === "keydown") {
    BTN[number].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[number].classList.remove("click");
  }
}

function pressBackspace(event, textarea, BTN) {
  let number;
  BTN.map((elem, index) => {
    if (elem.textContent === "Backspace") {
      return (number = index);
    }
  });

  if (event.type === "keydown") {
    BTN[number].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[number].classList.remove("click");
  }
}

function pressDelete(event, textarea, BTN) {
  let number;
  BTN.map((elem, index) => {
    if (elem.textContent === "Del") {
      return (number = index);
    }
  });

  if (event.type === "keydown") {
    BTN[number].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[number].classList.remove("click");
  }
}

function pressShift(event, textarea, BTN) {
  let number = [];
  let index;

  BTN.map((elem, index) => {
    if (elem.textContent === "Shift") {
      number.push(index);
    }
  });

  if (event.code === "ShiftLeft") {
    index = number[0];
  } else {
    index = number[1];
  }

  if (event.type === "keydown") {
    BTN[index].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[index].classList.remove("click");
  }
}

function pressCapsLock(event, textarea, BTN) {
  let number;
  BTN.map((elem, index) => {
    if (elem.textContent === "CapsLock") {
      return (number = index);
    }
  });

  if (event.type === "keydown") {
    BTN[number].classList.add("click");
  }
  if (event.type === "keyup") {
    BTN[number].classList.remove("click");
  }
}