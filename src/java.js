const firstName = document.getElementById('nome');
const button = document.getElementById('botonsubmit');

button.addEventListener("click", () =>{
    if (firstName.ariaValueMax.length == 0) {
        
        alert('O espaço não pode estar vazío');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("form");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        Swal.fire("Seu formulario foi enviado com sucesso!");
    });
});