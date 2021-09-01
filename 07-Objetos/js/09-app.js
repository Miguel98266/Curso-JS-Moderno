"use strict";

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

//Sella el objeto no puede crear ni eliminar propiedadades pero si modificar
Object.seal(producto);

producto.disponible = false;

console.log(producto);

console.log(Object.isSealed(producto));