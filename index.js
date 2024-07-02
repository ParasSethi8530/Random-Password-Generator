let range = document.getElementById("range");
let sliderValue = document.getElementById("slidervalue");
let password = document.getElementById("password");
let lowerCase = document.getElementById("lower-case");
let upperCase = document.getElementById("upper-case");
let symbols = document.getElementById("symbols");
let numbers = document.getElementById("numbers");
let copyBtn = document.getElementById("copybtn");

const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
const numberschars = "0123456789";
const symbolschars = "!@#$%^&*()_-+={}|[]:<>?;',./";

sliderValue.textContent = range.value;
range.addEventListener("input", function () {
  sliderValue.textContent = range.value;
  generatePassword();
});

function generatePassword() {
  const length = range.value;
  let characters = "";
  let pass = "";

  characters += lowerCase.checked ? lowercasechars : "";
  characters += upperCase.checked ? uppercasechars : "";
  characters += numbers.checked ? numberschars : "";
  characters += symbols.checked ? symbolschars : "";

  for (let i = 0; i < length; i++) {
    pass += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  password.value = pass;
}

copyBtn.addEventListener("click", () => {
  if (password.value != "" || password.value.length >= 1) {
    navigator.clipboard.writeText(password.value);
  }
});
