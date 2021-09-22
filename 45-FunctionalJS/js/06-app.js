// Funciones Puras o Pure functions
// 1) La función siempre devuelve el mismo valor para las mismas entradas.
// 2) La evaluación de la función no tiene efectos secundarios. 
//   Los efectos secundarios se refieren a cambiar otros atributos del programa que no están incluidos en la función, 
//   como cambiar los valores de las variables globales o usar flujos de E / S.
const duplicar = numero => numero * 2;


const numero1 = 20;

const resultado = duplicar(numero1);
console.log(resultado);
console.log(numero1);
