//Evento Submit a un formulario

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarFomrulario);

function validarFomrulario(evento) {
  evento.preventDefault();
  console.log("Buscando...");
  console.log(evento.target.action);
}
