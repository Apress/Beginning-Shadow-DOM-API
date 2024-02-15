class WcHeaderJustSlot extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      <h2><slot></slot></h2>
    `;
  }
}

window.customElements.define("wc-header-just-slot", WcHeaderJustSlot);
