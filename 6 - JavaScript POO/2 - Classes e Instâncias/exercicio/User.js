class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login realizado com sucesso.");
    } else {
      console.log("Falha ao fazer login! Email ou senha incorretos.");
    }
  }
}

const ju = new User("Juliano Almada", "j@mail.com", "123");

//ju.login("j@mail.com", "123");
ju.login("j@mail.com", "1234");
