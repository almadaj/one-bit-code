const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");
import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import { handleButtonPress, handleClear, handleTyping } from "./keyHandlers.js";
import switchTheme from "./themeSwitcher.js";
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress);
});
document.querySelector("#clear").addEventListener("click", handleClear);
document.querySelector("#input").addEventListener("keydown", handleTyping);
document.getElementById("equal").addEventListener("click", calculate);
document
  .querySelector("#copyToClipboard")
  .addEventListener("click", copyToClipboard);
document.querySelector("#themeSwitcher").addEventListener("click", switchTheme);
