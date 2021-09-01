// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     console.log(`Cinco`);
//     // break; detiene el for o rompe la ejecuccion
//     continue; //queda hasta esa linea y va la siguiente iteracion
//   }
//   console.log(`Numero: ${i}`);
// }

const carrito = [
    { nombre: "Monitor 37 pulgadas", precio: 500 },
    { nombre: "Television", precio: 100 },
    { nombre: "Tablet", precio: 200, descuento:true },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
  ];

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento `)
        continue;
    }
    console.log(carrito[i].nombre);
    
}
  
