const producto='                         Monitor 20 pulgadas                      ';
console.log(producto);
console.log(producto.length);

//Elimina los espacios en blanco del principio
console.log(producto.trimStart());
//Elimina los espacios en blanco del final
console.log(producto.trimEnd());
//Se pueden usar los metodos de forma encadenada 
console.log(producto.trimStart().trimEnd());

//es un método de cadena que se utiliza para eliminar los espacios 
//en blanco del principio y el final de una cadena.
console.log(producto.trim());