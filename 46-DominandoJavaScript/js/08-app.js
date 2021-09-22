
self.onload = () => {
    console.log('Ventana Lista');
}
window.nombre = 'Monitor 30 pulgadas'
const producto = {

    precio: 30,
    disponible: true,
    mostrarInfo: function () {
        // const self=this;
        return `El producto ${self.nombre} `
    }
}

console.log(producto.mostrarInfo());