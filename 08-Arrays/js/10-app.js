const carrito = [
  { nombre: "Monitor 37 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

const nuevoArreglo = carrito.forEach(function (producto) {
  return `${producto.nombre}-Precio: ${producto.precio}`;
});

//tienen la misma estructura
//Diferencia entre foreach y map
//.map crea otro arreglo y foreach no
const nuevoArreglo2 = carrito.map(function (producto) {
  return `${producto.nombre}-Precio: ${producto.precio}`;
});

console.log(nuevoArreglo);

console.log(nuevoArreglo2);
