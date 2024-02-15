document.addEventListener("alpine:init", () => {
  const template = document.createElement("template");
  template.innerHTML = `
    <style>
      span, button {
        font-size: 120%;
      }

      span {
        width: 32px;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 6px;
        background-color: blue;
        color: #ffffff;
      }
    </style>
    <button @click="dec">-</button>
    <span x-text="counter"></span>
    <button @click="inc">+</button>
  `;

  class ShadowDOMCounter extends HTMLElement {
    state = Alpine.reactive({
      counter: this.hasAttribute("start")
        ? parseInt(this.getAttribute("start"))
        : 0,
      inc: this.inc.bind(this),
      dec: this.dec.bind(this),
    });

    constructor() {
      super();

      const shadow = this.attachShadow({
        mode: "open",
      });
      shadow.appendChild(template.content.cloneNode(true));

      Alpine.addScopeToNode(shadow, this.state);
      Alpine.initTree(shadow);
    }

    connectedCallback() {}

    inc() {
      this.state.counter++;
    }
    dec() {
      this.state.counter--;
    }
  }

  customElements.define("my-reactive-shadow", ShadowDOMCounter);
});
