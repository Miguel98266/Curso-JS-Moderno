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
const producto4 = {
  nombre: "NUEVO",
  precio: 50,
};
//Inserta nuevos elementos al comienzo de una matriz.
carrito.unshift(producto3);

carrito.push(producto);
carrito.push(producto2);
console.table(carrito);

//Eliminar ultimo elemento de un arreglo

carrito.pop();
console.table(carrito);

//Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);

//Eliminar cualquier posicion
//Parametros: posición donde va a iniciar a cortar y cuántos elementos quieres eliminar?
carrito.splice(1,1);
console.table(carrito);