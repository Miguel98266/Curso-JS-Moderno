const carrito = [
  { nombre: "Monitor 37 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];
//tienen la misma estructura
//Diferencia entre foreach y map
//.map crea otro arreglo y foreach no

console.log('funcion map');
const nuevoArreglo2 = carrito.map(producto => `${producto.nombre}-Precio: ${producto.precio}`);
console.log(nuevoArreglo2);
console.log('funcion foreach');
carrito.forEach(producto => console.log(`${producto.nombre}-Precio: ${producto.precio}`));


