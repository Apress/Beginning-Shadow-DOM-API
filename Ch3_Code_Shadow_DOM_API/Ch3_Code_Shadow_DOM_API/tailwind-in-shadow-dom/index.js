import install from "@twind/with-web-components";
import config from "./twind.config";

customElements.define(
  "twind-element",
  class TwindElement extends install(config)(HTMLElement) {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      shadow.innerHTML = `
        <main class="h-screen bg-gray-400 flex items-center justify-center">
          <h1 class="font-bold text(center 4xl white sm:gray-800 md:pink-700)">
            Running Tailwind inside Shadow DOM
          </h1>
        </main>
      `;
    }
  }
);

document.body.innerHTML = "<twind-element></twind-element>";
