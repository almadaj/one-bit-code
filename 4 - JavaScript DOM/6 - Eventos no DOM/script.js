function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const user = sectionElement.children.user.value;
  const password = sectionElement.children.password.value;
  const passwordConfirm = sectionElement.children.passwordConfirm.value;

  if (password === passwordConfirm) {
    alert("Usuário " + user + " confirmado!");
  } else {
    alert("Senhas diferentes");
  }
}

//Não chamaremos a função no HTML, será pelo JS
//Usamos esse eventListener
const button = document.getElementById("register-button");

button.addEventListener("click", register);

//Removendo um evento pela própria função
function removeListener() {
  button.removeEventListener("click", register);
  alert("Event Removido");
}
