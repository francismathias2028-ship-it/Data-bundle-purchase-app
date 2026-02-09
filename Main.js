import { bundles } from "./bundles.js";

const list = document.getElementById("bundleList");

bundles.forEach(bundle => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <h3>${bundle.name}</h3>
    <p>Ksh ${bundle.price}</p>
    <button>BUY</button>
  `;

  div.querySelector("button").onclick = () => {
    localStorage.setItem("selectedBundle", JSON.stringify(bundle));
    location.href = "checkout.html";
  };

  list.appendChild(div);
});