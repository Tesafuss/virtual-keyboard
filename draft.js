// class Element {
//   constructor(type, style, parent) {
//     this.elem = document.createElement(type);
//     this.elem.classList.add(style);
//     parent.appendChild(this.elem);
//   }
// }

class Block {
  constructor(type, style, parent) {
    this.elem = document.createElement(type);
    this.elem.classList.add(style);
    parent.appendChild(this.elem);
  }
}

class Textarea extends Block {
  constructor() {
    super("textarea", style, parent,);
    this.elem.setAttribute("cols", 90);
    this.elem.setAttribute("rows", 15);
  }
}

class Text extends Block {
  constructor(typeTxt, style, parent, content) {
    super(typeTxt, style, parent);
    this.elem.textContent = content;
  }
}

const body = document.querySelector("body")
for (let i = 0; i < 3; i++){
  let num = new Block ("div", "block", body)
}
let txt = new Text ("h1", "title", body, "Привет мир")
