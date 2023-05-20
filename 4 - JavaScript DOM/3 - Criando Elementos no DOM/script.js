function addInput() {
  const ul = document.getElementById("inputs");

  const newItem = document.createElement("li");
  newItem.className = "list-item";
  newItem.innerText = "Novo input: ";

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "input";

  newItem.appendChild(newInput);
  ul.appendChild(newItem);
}
