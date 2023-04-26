class Block {

    constructor(type = "div"){
        this.elem = document.createElement(type);
    }
    
    create() {
     document.body.appendChild(this.elem);
    }
}

class Textarea extends Block {
    constructor() {
        super("textarea");
        this.elem.setAttribute("cols", 90);
        this.elem.setAttribute("rows", 15);
        this.elem.classList.add("textarea")
    }
    
}

const textarea = new Textarea("textarea");
textarea.create();

