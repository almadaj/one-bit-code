function login(element) {
  const user = element.children.user.value;
  const password = element.children.password.value;
  const passwordConfirm = element.children.passwordConfirm.value;

  if (password === passwordConfirm) {
    alert("Usuário " + user + " registrado");
  } else {
    alert("Senhas diferentes");
  }
}
