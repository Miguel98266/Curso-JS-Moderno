//Inicializar una variable con un valor
var producto="Monitor de 24 pulgadas";
console.log(producto);
//Las variables se puede reasignar
producto="Monitor de 19 pulgadas";
console.log(producto);
//Javascript es un lenguaje de tipo dinamico , nose especifica tipo de dato
producto=20;
console.log(producto);

//Se puede inicializar sin valor y asignarlo despues 
var disponible;
disponible=true;

disponible=false;

//Inicializar multiples variables.
var categoria='Computadora',
    marca="Marca Famosa",
    calificacion=5;

//Las variables no pueden iniciar con numeros
var 99dias;
var dias99;


var nombreProducto; //Camelcase 
var nombre_producto; //underscore , snake
var Producto;// PascalCase se usa en clases