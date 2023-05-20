function add() {
  //Mostrando onde será criado: section
  const contactSection = document.getElementById("contact-list");

  //Criando o local em que terá os inputs e labels
  const h3 = document.createElement("h3");
  h3.innerText = "Contato";

  //ul para adicionar os elementos da agenda
  const ul = document.createElement("ul");

  //Criando os labels e inputs como forma de li
  //Label do input de nome
  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome: ";
  //Input de nome, setando tipo e nome
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullname";
  //Adiciona um elemento filho, valor inserido no input
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);
  ul.appendChild(document.createElement("br"));

  const phoneLi = document.createElement("li");
  phoneLi.innerText = "Telefone: ";
  const phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.name = "phone";
  phoneLi.appendChild(phoneInput);
  ul.appendChild(phoneLi);
  ul.appendChild(document.createElement("br"));

  const adressLi = document.createElement("li");
  adressLi.innerText = "Endereço: ";
  const adressInput = document.createElement("input");
  adressInput.type = "text";
  adressInput.name = "adress";
  adressInput.id = "adress";
  adressLi.appendChild(adressInput);
  ul.appendChild(adressLi);
  ul.appendChild(document.createElement("br"));

  //Passando os valores para section como h3 e ul
  contactSection.append(h3, ul);
}

function remove() {
  const contactSection = document.getElementById("contact-list");
  const titles = document.getElementsByTagName("h3");
  const contact = document.getElementsByTagName("ul");

  contactSection.removeChild(titles[titles.length - 1]);
  contactSection.removeChild(contact[contact.length - 1]);
}
