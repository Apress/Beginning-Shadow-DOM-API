import "./my-customized-text.css";

class FancyElement extends HTMLElement {
  constructor() {
    super();
    this.ShadowRoot = this.attachShadow({ mode: "open" });
    this.ShadowRoot.innerHTML = "Shadow DOM imperative";
  }
}

customElements.get("imperative-fancy-element") ||
  customElements.define("imperative-fancy-element", FancyElement);
