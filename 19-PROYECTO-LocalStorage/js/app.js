// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

// Event Listeners
eventListeners();
function eventListeners() {
  // Cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  //   Cuando el documento esta listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];

    console.log(tweets);

    crearHTML();
  });
}

// Funciones
function agregarTweet(evento) {
  evento.preventDefault();

  // Textarea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;
  // Validacion...
  if (tweet === "") {
    mostrarError("Un mensaje no puede ir vacio");
    return; //Evita que se ejecuten mas lineas de codigo
  }
  const tweetObj = {
    id: Date.now(),
    tweet: tweet,
  };
  //   Añadir al arreglo de tweets
  tweets = [...tweets, tweetObj];
  console.log(tweets);
  //   Una vez agregado vamos a crear el HTML
  crearHTML();

  //   Reiniciar el formulario
  formulario.reset();
}

// Mostrar Mensaje de error
function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  //   Insertarlo en el Contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);
  //   Elimina la alerta despues de 3 segundos
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

// Muestra un listado de los tweets
function crearHTML() {
  limpiarHTML();
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      //Agregar un boton de click
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.innerText = "X";

        // Añadir la funcion de eliminar
        btnEliminar.onclick=()=>{
            borrarTweet(tweet.id);
        }

      // Crear el HTML
      const li = document.createElement("li");

      // Añadir el texto
      li.innerText = tweet.tweet;
      //Asignar el boton
      li.appendChild(btnEliminar);

      // Insertarlo en el HTML
      listaTweets.appendChild(li);
    });
  }
  sincronizarStorage();
}

// Agrega los Tweets actuales a LocalStorage
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id){
    tweets=tweets.filter((tweet)=>{
        return tweet.id!==id
    })
    crearHTML();
}

// Limpiar el HTML
function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
