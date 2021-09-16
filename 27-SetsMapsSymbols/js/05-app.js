const sym = Symbol("1");
const sym2 = Symbol("1");

if (sym === sym2) {
  console.log("Son iguales");
} else {
  console.log("Son diferentes");
}

// Los simbolos nunca son iguales

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto

persona[nombre] = "Miguel";
persona[apellido] = "Calixto";
persona.tipoCliente = "Premium";
persona.saldo = 200;

console.log(persona);
console.log(persona[nombre]);

// Las propiedades que utilizan un symbol no son iterables
for (const i in persona) {
  console.log(i);
}

// Definir una descripcion del symbol
const nombreCliente = Symbol("Nombre del Cliente");
const cliente={}
cliente[nombreCliente]='Pedro';

console.log(cliente)