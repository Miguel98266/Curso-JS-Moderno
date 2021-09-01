const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//.every
//Determina si todos los miembros de una matriz
//satisfacen la prueba especificada.

const resultado = carrito.every((producto) => {
  return producto.precio < 1000;
});
console.log(resultado);

const resultado2 = carrito.some((producto) => {
  return producto.precio < 1000;
});
console.log(resultado2);
