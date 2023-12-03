document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("formulario-pesquisa");
  
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
  
      alert("¡Formulario enviado com sucesso!");
    });
  });