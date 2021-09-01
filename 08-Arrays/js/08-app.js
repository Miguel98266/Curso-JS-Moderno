const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// const nombre = producto.nombre;
// console.log(nombre);

//Desctructuring sacar de la estructura
const { nombre } = producto;

console.log(nombre);

//Destructuring con arreglos
const numeros = [10, 20, 30, 40,50];

//const [primero,segundo,tercero]=numeros;
// console.log(primero);
// console.log(tercero);

//const [primero, , tercero] = numeros;
const [primero,segundo,...tercero]=numeros;
console.log(primero);
console.log(tercero);
