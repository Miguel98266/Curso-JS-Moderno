const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

meses.forEach((mes, indice) => {
  if (mes === "Abril") {
    console.log(`${mes} Encontrado en el indice ${indice}`);
  }
});

//Encontrar el indice de Abril
const indice1 = meses.findIndex((mes) => {
  return mes === "Abril";
});
console.log(indice1);

//Encontrar un indice de un arreglo de objetos...
const indice2 = carrito.findIndex((producto) => {
  return producto.precio === 100;
});

console.log(indice2);
