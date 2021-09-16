const ciudades = ["Londes", "NY", "Madrid", "Paris"];
const ordenes = new Set([123, 234, 1234, 1233]);

const datos = new Map();

datos.set("nombre", "Miguel");
datos.set("profesion", "desarrollador");

// Default

for (const ciudad of ciudades) {
  console.log(ciudad);
}

for (const orden of ordenes) {
  console.log(orden);
}
for (const dato of datos) {
  console.log(dato);
}

// Keys iterator llaves de un arreglo
for (const keys of ciudades.keys()) {
  console.log(keys);
}
for (const keys of ordenes.keys()) {
  console.log(keys);
}
for (const keys of datos.keys()) {
  console.log(keys);
}

// Values Iterator solo trae el valor
for (const value of ciudades.values()) {
  console.log(value);
}
for (const value of ordenes.values()) {
  console.log(value);
}

for (const value of datos.values()) {
  console.log(value);
}

// Entries iterator trae llave y valor
for (let entry of ciudades.entries()) {
  console.log(entry);
}
for (let entry of ordenes.entries()) {
  console.log(entry);
}

for (let entry of datos.entries()) {
  console.log(entry);
}
