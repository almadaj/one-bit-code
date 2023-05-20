const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Olá, mundo!";
  input.getAttribute("value");
  console.log(input.value);
  console.log(input.getAttribute("value"));
});

document.getElementById("type").addEventListener("click", function () {
  input.type = input.type !== "radio" ? "radio" : "type";
  //input.type = input.type !== "date" ? "date" : "type";
  //input.setAttribute("type", "radio");
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = input.placeholder !== "" ? "" : "Digite algo...";
});

document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log("O valor de data-something é: " + data);
  input.dataset.somethingElse = "Algum outro valor";
});
