// for (let i = 0; i <= 10; i++) {
//     console.log(`Numero: ${i}`);
// }

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(`El numero ${i} es par`);
//   }else{
//       console.log(`El nuevo ${i} es impar`);
//   }
// }

const carrito = [
  { nombre: "Monitor 37 pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}
