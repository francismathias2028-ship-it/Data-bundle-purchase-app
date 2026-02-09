const bundle = JSON.parse(localStorage.getItem("selectedBundle"));

if (!bundle) location.href = "index.html";

document.getElementById("name").innerText = bundle.name;
document.getElementById("price").innerText = "Ksh " + bundle.price;

document.getElementById("confirm").onclick = () => {
  alert("Order saved. Next: login & payment");
  location.href = "login.html";
};