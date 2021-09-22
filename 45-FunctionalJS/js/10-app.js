// Composition


const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando Email en ${info.nombre}`)
        info.email = email;
    }
});

const obtenerEmpresa = (info) => ({
    mostrarEmpresa() {
        console.log(`Empresa ${info.empresa}`);
    }
});

const obtenerPuesto = (info) => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
});

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtnerEmail(info),
        obtenerEmpresa(info)
    )


}
function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtnerEmail(info),
        obtenerPuesto(info)
    )
}

const obtnerEmail = info => ({
    mostrarEmail() {
        console.log(`Correo: ${info.email}`)
    }
})

const cliente = Cliente('Miguel', null, 'MACS');
cliente.mostrarNombre();
cliente.agregarEmail('cliente@cliente.com')
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('=====================')

const empleado = Empleado('Angel', null, 'Dev');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();