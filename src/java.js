document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("formulario-pesquisa");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("¡Formulario enviado com sucesso!");
    });
});

const firstName = document.querySelector('#input');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    if (firstName.ariaValueMax.length == 0) {
        alert('O espaço não pode estar vazío');
    } else {
        alert('Hola ' + firstName.value);
    }
});