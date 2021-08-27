const producto='Monitor 20 pulgadas';
const precio='30 USD';
//Concatenar cadenas 

console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

console.log(producto +'Con un precio de: '+precio);

console.log("El producto " + producto + " tiene un precio de " + precio);
console.log("El producto " , producto , " tiene un precio de " , precio);

//Template strings
console.log(`El Producto ${producto} tiene un precio de ${precio}`);