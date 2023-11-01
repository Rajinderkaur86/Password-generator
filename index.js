const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let firstPasswordEl = document.getElementById("first-password");
let secondPasswordEl = document.getElementById("second-password");
let buttonEl = document.getElementById("password-button");
const length = document.getElementById("length");

function getRandomCharacter() {
  let randomCharacters = Math.floor(Math.random() * characters.length);
  return characters[randomCharacters];
}

function generateRandomPassword() {
  let randomPassword = "";
  for (let i = 0; i < length.value; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}
buttonEl.addEventListener("click", function () {
  firstPasswordEl.textContent = generateRandomPassword();
  secondPasswordEl.textContent = generateRandomPassword();
});

function copyToClipBoard1() {
  let passwordEl1 = document.getElementById("first-password");
  navigator.clipboard.writeText(passwordEl1.innerText);
}
function copyToClipBoard2() {
  let passwordEl2 = document.getElementById("second-password");
  navigator.clipboard.writeText(passwordEl2.innerText);
}
let button1 = document.getElementById("copy-button1");
button1.addEventListener("click", function () {
  copyToClipBoard1();
});
let button2 = document.getElementById("copy-button2");
button2.addEventListener("click", function () {
  copyToClipBoard2();
});
