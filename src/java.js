/* document.addEventListener("DOMContentLoaded", function () {
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
}); */

const nome = document.getElementById("nome")
const email = document.getElementById("email")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(nome.value.length <3){
        warnings += `O nome não é valido <br>`
    }

    if(!regexEmail.test(email.value)){
        warnings += `O email não é valido <br>`
    }
})