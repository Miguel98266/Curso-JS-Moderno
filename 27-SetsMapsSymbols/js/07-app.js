function* crearGenerador() {
  yield 1;
  yield "Miguel";
  yield 3 + 3;
  yield true;
}

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next().done);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador);

// Generadir oara carrito de compras

function* generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}
const carrito = ["Producto 1", "Producto2", "Producto3"];
const iterador2 = generadorCarrito(carrito);
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
