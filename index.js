class Block {
  constructor(type, style, parent) {
    this.elem = document.createElement(type);
    this.elem.classList.add(style);
    parent.appendChild(this.elem);
  }
}

class Textarea extends Block {
  constructor(style, parent) {
    super("textarea", style, parent);
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

class Btn extends Block {
  constructor(style, parent, content) {
    super("button", style, parent);
    this.elem.textContent = content;
  }
}

const btnInLine = [14, 14, 13, 13, 9];


function createPage () {
  const body = document.querySelector("body");

  let h1 = new Text("h1", "title", body, "Rs School Virtual keyboard");

  let textarea = new Textarea("textarea", body);

  let keyboard = new Block("div", "keyboard", body);
  console.log(keyboard)

  keyboard = document.querySelector(".keyboard")
  console.log(keyboard)


  for (let i = 0; i < btnInLine.length; i++){
    let quantity = btnInLine[i];
    let btn_line = new Block("div", "btn_line", keyboard);
    btn_line = document.querySelectorAll(".btn_line")[i]

    for(let btn_quantity = 0; btn_quantity < quantity; btn_quantity++){
      let btn = new Btn("btn", btn_line)
    }
  }
}

createPage();


