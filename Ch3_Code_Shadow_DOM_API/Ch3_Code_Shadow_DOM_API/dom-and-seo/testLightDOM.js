class WcHeaderLightDom extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
        </style>
        <slot></slot>
      `;
  }
}

window.customElements.define("wc-header-light-dom", WcHeaderLightDom);
