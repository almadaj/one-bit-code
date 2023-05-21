export default function copyToClipboard(ev) {
  const button = ev.currentTarget;
  if (button.innerText === "Copiar") {
    button.innerText = "Copiado!";
    button.classList.add("success");
    navigator.clipboard.writeText(document.querySelector("#result").value);
  } else {
    button.innerText = "Copiar";
    button.classList.remove("success");
  }
}
