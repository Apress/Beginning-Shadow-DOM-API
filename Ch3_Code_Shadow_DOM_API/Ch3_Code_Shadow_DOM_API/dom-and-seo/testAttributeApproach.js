class WcHeaderNoSlot extends HTMLElement {
  static get observedAttributes() {
    return ["text"];
  }

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      <h2></h2>
    `;
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this.shadowRoot.querySelector("h2").textContent = newValue;
  }
}

window.customElements.define("wc-header-no-slot", WcHeaderNoSlot);
