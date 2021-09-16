//Variables
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const cart_menu_num = document.querySelector(".cart").children[2];
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  //Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);

  // Elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso);

  // Vaciar el carrito
  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = []; //Reseteamos el carrito
    limpiarHtml(); //Eliminamos todo el HTML
  });
}

//Funciones

function agregarCurso(evento) {
  evento.preventDefault();
  if (evento.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = evento.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

// Elimina un curso del carrito
function eliminarCurso(evento) {
  console.log(evento.target.classList);
  if (evento.target.classList.contains("borrar-curso")) {
    const cursoId = evento.target.getAttribute("data-id");

    // Elimina del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter((curso) => {
      return curso.id !== cursoId;
    });
    carritoHTML(); //Iterar sobre el carrito y mostrar su HTML
  }
}

//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso

function leerDatosCurso(curso) {
  // console.log(curso);
  //Crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantida: 1,
  };

  //Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((curso) => {
    return curso.id === infoCurso.id;
  });
  if (existe) {
    // Actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantida++;
        return curso; //Retorna el objeto actualizado
      } else {
        return curso; //Retorna los objetos que no son los duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    // Agregamos el curso al carrito
    // Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  //console.log(infoCurso);

  console.log(articulosCarrito);
  carritoHTML();
  contadorProductos();
}
//
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
// Contador de productos
function contadorProductos() {
  let numero = 0;
  articulosCarrito.forEach((curso) => {
    numero += curso.cantida;
  });
  console.log(numero);
  if (numero > 0) {
    var el = document.createElement("span");
    el.classList.add("badge", "rounded-circle");
    el.id = "cart_menu_num";
    el.innerHTML = `${numero}`;
    insertAfter(cart_menu_num, el);
  }
}

// Muestra el Carrito de compras en HTML
function carritoHTML() {
  // Limpiar el HTML
  limpiarHtml();
  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, id, cantida } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
    <td><img src="${imagen}" width="100"></td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantida}</td>
    <td><a href="#" class="borrar-curso" data-id="${id}"> X </a> </td>
    `;
    // Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

//Elimina los cursos del tbody
function limpiarHtml() {
  // Forma lenta
  // contenedorCarrito.innerHTML = "";

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

function limpiarnumeroscarritoHtml() {
  // Forma lenta
  // contenedorCarrito.innerHTML = "";
  
  while (num.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
