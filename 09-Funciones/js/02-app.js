//Declaracion de funcion (Function Declaration)
//Funciona antes de declarla
sumar();
function sumar() {
  console.log(2 + 2);
}
//Hoisting
//Primera etapa de creacion
//Ejecuccion



//Expresion de Funcion (Function Expression)
//No funciona antes de declarla
sumar2();
const sumar2 = function () {
  console.log(3 + 3);
};
 