import { Block, Btn, Textarea, Text } from "./classes.js";
import {
  keyboardEng,
  keyboardEngUpperCase,
  keyboardRus,
  keyboardRusUpperCase,
} from "./keyboards.js";

const body = document.querySelector("body");
const btnInLine = [14, 15, 13, 13, 9];

export function createPage() {
  let h1 = new Text("h1", "title", body, "Rs School Virtual keyboard");
  let textaerea = new Textarea("textarea", body);
  textaerea = document.querySelector(".textarea");
  textaerea.setAttribute("autofocus", "")
  createKeyboard();
}

function createKeyboard() {
  let keyboard = new Block("div", "keyboard", body);
  keyboard = document.querySelector(".keyboard");
  addEmptyButtons(keyboard);
  addKeyKeyborad();
}

function addEmptyButtons(keyboard) {
  // create 5 lines and fill it with buttons , quantity buttons from the btnInLine.
  for (let i = 0; i < btnInLine.length; i++) {
    let quantity = btnInLine[i];
    let btn_line = new Block("div", "btn_line", keyboard);
    btn_line = document.querySelectorAll(".btn_line")[i];

    for (let btn_quantity = 0; btn_quantity < quantity; btn_quantity++) {
      let btn = new Btn("btn", btn_line);
    }
  }
}

function addKeyKeyborad() {
  let btn = document.querySelectorAll(".btn");
  let btnNumber = 0;
  let lastBtnInLine = 0;

  btnInLine.map((elem, index) => {
    lastBtnInLine += elem;
    let count = 0;

    while (btnNumber < lastBtnInLine) {
      btn[btnNumber].textContent = keyboardEng[index][count];
      btnNumber++;
      count++;
    }
  });
  addClassForSpecialBtn();
}

function addClassForSpecialBtn() {
  const BTN = Array.from(document.querySelectorAll(".btn"));

  BTN.map((elem) => {
    switch (elem.textContent) {
      case "Tab":
        elem.classList.add("btn-s");
        break;
      case "Backspace":
        elem.classList.add("btn-m");
        break;
      case "CapsLock":
        elem.classList.add("btn-m");
        break;
      case "Shift":
        elem.classList.add("btn-l");
        break;
      case "Alt":
        elem.classList.add("btn-s");
        break;
      case "Ctrl":
        elem.classList.add("btn-s");
        break;
      case "Space":
        elem.classList.add("btn-xl");
        break;
      case "Win":
        elem.classList.add("btn-s");
        break;
      case "\\":
        elem.classList.add("btn-s");
        break;
      case "Enter":
        elem.classList.add("btn-m");
        break;
    }
  });
}
