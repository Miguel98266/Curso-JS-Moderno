function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de Clientes se descargo correctamente')
            } else {
                reject('Error en la conexion');
            }
        }, 3000);
    })
}

// Async Await

async function ejecutar(){
    try {
        const respuesta= await descargarClientes();
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }
}

ejecutar();