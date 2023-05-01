export class Block {
  constructor(type, style, parent) {
    this.elem = document.createElement(type);
    this.elem.classList.add(style);
    parent.appendChild(this.elem);
  }
}

export class Textarea extends Block {
  constructor(style, parent) {
    super("textarea", style, parent);
    this.elem.setAttribute("cols", 90);
    this.elem.setAttribute("rows", 15);
  }
}

export class Text extends Block {
  constructor(typeTxt, style, parent, content) {
    super(typeTxt, style, parent);
    this.elem.textContent = content;
  }
}

export class Btn extends Block {
  constructor(style, parent, content) {
    super("button", style, parent);
    this.elem.textContent = content;
  }
}