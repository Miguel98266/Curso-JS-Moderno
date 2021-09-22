// Hoisting
// Primero lee variables y luego funciones

obtnerCliente('Miguel');

function obtnerCliente(nombre) {
    console.log(`El nombre del cliente es${nombre}`);
}



obtnerCliente2('Angel');
 const obtnerCliente2 = function (nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}
