"use strict";

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Congela un Objeto para no poderlo modificar ,crear o eliminar
Object.freeze(producto);

// producto.disponible = false;

console.log(producto);

//Verifica si el objeto esta congelado
console.log(Object.isFrozen(producto));
