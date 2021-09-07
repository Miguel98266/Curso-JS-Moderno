// Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

// Contenedor par alos resultados
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos); //Muestra los automoviles

  // Llena las opciones de años
  llenarSelect();
});

// Event listener para los select de busqueda
marca.addEventListener("change", (evento) => {
  datosBusqueda.marca = evento.target.value;
  filtrarAuto();
});
year.addEventListener("change", (evento) => {
  datosBusqueda.year = evento.target.value;
  filtrarAuto();
});
minimo.addEventListener("change", (evento) => {
  datosBusqueda.minimo = evento.target.value;
  filtrarAuto();
});
maximo.addEventListener("change", (evento) => {
  datosBusqueda.maximo = evento.target.value;
  filtrarAuto();
});
puertas.addEventListener("change", (evento) => {
  datosBusqueda.puertas = evento.target.value;
  filtrarAuto();
});
transmision.addEventListener("change", (evento) => {
  datosBusqueda.transmision = evento.target.value;
  filtrarAuto();
});
color.addEventListener("change", (evento) => {
  datosBusqueda.color = evento.target.value;
  console.log(datosBusqueda);
  filtrarAuto();
});

// Funciones
function mostrarAutos(autos) {
  limpiarHtml(); //Elimina el HTML previo

  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `
        Marca: ${marca} ${modelo} - Año: ${year} - ${puertas} Puertas -Transmision ${transmision} 
        -Precio: ${precio} - Color: ${color}
        `;
    // Insertar en el html
    resultado.appendChild(autoHTML);
  });
}

// Limpiar Html
function limpiarHtml() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

// Genera los años del select
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion); //Agrega las opciones de año al select
  }
}

// Funcion que filtra en base a la busqueda
function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuerta)
    .filter(filtrarTransmision)
    .filter(filtrarColor)
  //   console.log(resultado);
  

  if (resultado.length) {
    mostrarAutos(resultado);
  }else{
      noResultado();
  }
}

function noResultado(){
    limpiarHtml();
    const noResultado=document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent='No hay Resultados, Intenta con otros terminos de busqueda';
    resultado.appendChild(noResultado)
}

function filtrarMarca(auto) {
  const { marca } = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;

  if (year) {
    return auto.year === parseInt(year);
  }
  return auto;
}

function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;

  if (minimo) {
    return auto.precio >=  minimo;
  }
  return auto;
}
function filtrarMaximo(auto) {
  const { maximo } = datosBusqueda;

  if (maximo) {
    return auto.precio <=  maximo;
  }
  return auto;
}
function filtrarPuerta(auto) {
    const { puertas } = datosBusqueda;
    if (puertas) {
      return auto.puertas === parseInt(puertas);
    }
    return auto;
  }
function filtrarTransmision(auto) {
const { transmision } = datosBusqueda;
if (transmision) {
    return auto.transmision === transmision;
}
return auto;
}
function filtrarColor(auto) {
const { color } = datosBusqueda;
if (color) {
    return auto.color === color;
}
return auto;
}