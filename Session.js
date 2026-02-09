import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

let timer;

function reset() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    signOut(auth);
    location.href = "login.html";
  }, 10 * 60 * 1000);
}

window.onload = reset;
document.onmousemove = reset;
document.onkeypress = reset;