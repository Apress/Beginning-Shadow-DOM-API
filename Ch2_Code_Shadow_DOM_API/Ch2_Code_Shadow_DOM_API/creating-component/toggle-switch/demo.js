document
  .querySelector("#style-demo toggle-switch")
  .addEventListener("toggle-switch:change", (e) => {
    const result = document.querySelector("#style-demo .result");
    result.classList[e.detail.checked ? "add" : "remove"]("styleish");
  });
