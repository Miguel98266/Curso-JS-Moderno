// Closures


// const cliente='Juan';

// function mostrarCliente(){
//     const cliente='Miguel';
//     console.log(cliente);
// }

// console.log(cliente);

// mostrarCliente();

const obtenerCliente = () => {
    const nombre = "Miguel";
    function muestraNombre() {
        console.log(nombre)
    }
    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();