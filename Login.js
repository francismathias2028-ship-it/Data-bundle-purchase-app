import { auth } from "./firebase.js";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
  size: "invisible"
});

document.getElementById("send").onclick = () => {
  const phone = document.getElementById("phone").value;
  signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
    .then(res => {
      window.confirmationResult = res;
      alert("OTP sent");
    });
};

document.getElementById("verify").onclick = () => {
  const otp = document.getElementById("otp").value;
  window.confirmationResult.confirm(otp)
    .then(() => location.href = "index.html");
};