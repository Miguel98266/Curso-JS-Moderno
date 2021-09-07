//Variables
const btnEnviar = document.querySelector("#enviar");
const btnReset = document.querySelector("#resetBtn");
const formulario = document.querySelector("#enviar-mail");
// Variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

const er =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventListeners();
function eventListeners() {
  // Cuando la app arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);

  // Campos del formulario
  email.addEventListener("blur", validarFormulario);
  asunto.addEventListener("blur", validarFormulario);
  mensaje.addEventListener("blur", validarFormulario);

  //   Reinicia el formulario
  btnReset.addEventListener('click',resetearFormulario);

  // Enviar email
  formulario.addEventListener('submit',enviarEmail);  
}

// Funciones

function iniciarApp() {
  btnEnviar.disabled = true;
  // btnEnviar.classList.add('cursor-not-allowed','opacity-50')
}

// Valida el formulario
function validarFormulario(evento) {
  if (evento.target.value.length > 0) {
    // Elimina los errores...
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }

    evento.target.classList.remove("border", "border-red-500");
    evento.target.classList.add("border", "border-green-500");
  } else {
    evento.target.classList.remove("border", "border-green-500");
    evento.target.classList.add("border", "border-red-500");
    mostrarError("Todos los campos son obligatorios");
  }

  if (evento.target.type === "email") {
    // Expresion regular para validar email
    
    if (er.test(evento.target.value)) {
      // Elimina los errores...
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }

      evento.target.classList.remove("border", "border-red-500");
      evento.target.classList.add("border", "border-green-500");
    } else {
      evento.target.classList.remove("border", "border-green-500");
      evento.target.classList.add("border", "border-red-500");
      mostrarError("Email no valido");
    }
  }

  if (er.test(email.value) && asunto.value !== "" && mensaje.value !== "") {
    btnEnviar.disabled = false;
   btnEnviar.classList.remove('cursor-not-allowed','opacity-50')
  } 
}
function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    "border",
    "border-red-500",
    "background-red-100",
    "text-red-500",
    "p-3",
    "mt-5",
    "text-center",
    "error"
  );

  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    formulario.appendChild(mensajeError);
  }
}

//Envia el email
function enviarEmail(evento){
    evento.preventDefault();
    
    //Mostrar el spinner
    const spinner =document.querySelector('#spinner');
    spinner.style.display='flex';
    // Despues de 3 segundos ocultar el spinner y mostrar el mesnaje
    setTimeout(() => {
        spinner.style.display='none';

        // Mensaje que dice que se envio correctamente
        const parrafo=document.createElement('p');
        parrafo.textContent="El mensaje se envio correctamente";
        parrafo.classList.add('text-center','my-10','p-3','bg-green-500','text-white','font-bold','uppercase')
        formulario.insertBefore(parrafo,spinner);
        setTimeout(() => {
            parrafo.remove(); //Eliminar el parrafo de exito
            resetearFormulario();
        }, 4000);
        // Inserta el parrafo antes del spinner
    }, 2000);
}

// Funcion que resetea el formulario
function resetearFormulario(){
    formulario.reset();
    email.classList.remove("border", "border-green-500");
    asunto.classList.remove("border", "border-green-500");
    mensaje.classList.remove("border", "border-green-500");
    email.classList.remove("border", "border-red-500");
    asunto.classList.remove("border", "border-red-500");
    mensaje.classList.remove("border", "border-red-500");
    iniciarApp();
}