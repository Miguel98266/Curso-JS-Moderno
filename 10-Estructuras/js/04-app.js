//Operador Mayor que y menor que

let dinero = 300;
const totalApagar = 500;
const tarjeta = true;
const cheque = true;

if (dinero >= totalApagar) {
  console.log(`Si podemos pagar`);
} else if (cheque) {
  console.log("Si puedo pagar por que tengo cheque");
} else if (tarjeta) {
  console.log("Si puedo pagar por que tengo la tarjeta");
} else {
  console.log("Fondos insuficientes");
}
