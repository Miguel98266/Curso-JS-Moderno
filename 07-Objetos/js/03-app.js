const producto = {
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
};

//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";
//Borrar propiedades del objeto
delete producto.disponible;

console.log(producto);
