const carrito = [];

//Definir un producto

const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 400,
};
const producto2 = {
  nombre: "Celular",
  precio: 800,
};

const producto3 = {
  nombre: "teclado",
  precio: 50,
};
//Inserta nuevos elementos al comienzo de una matriz.
carrito.unshift(producto3);

carrito.push(producto);
carrito.push(producto2);
console.table(carrito);
