const form = document.getElementById("order-form");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const breadType = document.querySelector('select[name="breadType"]').value;
  const main = document.querySelector('input[name="main"]').value;
  const obs = document.querySelector('textarea[name="observations"]').value;

  let salad = "";
  document
    .querySelectorAll('input[name="salad"]:checked')
    .forEach(function (item) {
      salad += " - " + item.value + "\n";
    });

  alert(
    "Pedido Realizado!" +
      "\nNome do cliente: " +
      name +
      "\nEndereço de entrega: " +
      address +
      "\nTipo de pão: " +
      breadType +
      "\nRecheio: \n - " +
      main +
      "\n" +
      salad +
      "Observações: " +
      obs
  );
});
