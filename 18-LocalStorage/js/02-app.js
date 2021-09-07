// Obtener los datos de local storage
const nombre = localStorage.getItem("nombre");
console.log(nombre);

// Convertir de string a JSON

const productoJson = localStorage.getItem("producto");
console.log(JSON.parse(productoJson));

// Convertir de string a Array
const meses=localStorage.getItem('meses');
console.log(JSON.parse(meses));