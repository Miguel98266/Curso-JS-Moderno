// Partials y Currying
// Dividir la funcion en varias partes

const suma = (a, b, c) => a + b + c;

// const parcial = a => (b, c) => suma(a, b, c);

// const primerNumero = parcial(5);
// const resultado = primerNumero(4, 5);
// console.log(resultado);

const parcial1 = a => b => c => suma(a, b, c);

const primerNumero1 = parcial1(1);
const segundoNumero = primerNumero1(2);
const tercerNumero = segundoNumero(3);

console.log(tercerNumero);

const resultadoParcial = parcial1(1)(2)(3);
console.log(resultadoParcial);

console.log(suma(1, 2, 3))