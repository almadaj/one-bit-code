//Session Storage
//Adicionando
document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});
//Lendo
document.getElementById("readSesssion").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert("A informação salva é: " + info);
});

//Local Storage
//Adicionando
document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
  input.value = "";
});
//Lendo
document.getElementById("readLocal").addEventListener("click", function () {
  const t = localStorage.getItem("text");
  alert("A informação de local é: " + t);
});

//Cookies
document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 5, 9, 11) + ";";
  const path = "path=/;";
  input.value = "";
  document.cookie = cookie + expiration + path;
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "text=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 5, 9, 11) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});
document.get;
