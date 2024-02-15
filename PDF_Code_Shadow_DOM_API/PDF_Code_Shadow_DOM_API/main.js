// https://www.npmjs.com/package/element-internals-polyfill
// import "https://unpkg.com/element-internals-polyfill";

(() => {
  const form = document.getElementById("myform");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.clear();
    console.log("Submitted data:");

    const data = new FormData(form);
    for (let nv of data.entries()) {
      console.log(`  ${nv[0]}: ${nv[1]}`);
    }
  });
})();

// web component
class InputAge extends HTMLElement {
  static formAssociated = true;

  formAssociatedCallback(form) {
    console.log("form associated:", form.id);
  }

  constructor() {
    super();
    this.internals = this.attachInternals();
    this.setValue("");
  }

  // connect component
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = `
    <style>input { width: 4em; }</style>
    <input type="number" placeholder="age" min="18" max="120" />`;

    // monitor input values
    shadow.querySelector("input").addEventListener("change", (e) => {
      this.setValue(e.target.value);
    });
  }

  // set form value
  setValue(v) {
    this.value = v;
    this.internals.setFormValue(v);
  }
}

// register component
customElements.define("input-age", InputAge);
