const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

console.log(producto);
console.log(medidas);

//Copia los valores de todas las propiedades propias enumerables de uno o más objetos de origen a un objeto de destino
const resultado = Object.assign(producto, medidas);
console.log(resultado);

//Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas };
console.log(resultado2);
