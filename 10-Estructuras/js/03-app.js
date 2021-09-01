//Operador Mayor que y menor que

let dinero = 500;
const totalApagar = 300;

if (dinero >= totalApagar) {
  dinero -= totalApagar;
  console.log(`Si podemos pagar , tu cambio ${dinero}`);
} else {
  console.log("Fondos insuficientes");
}
