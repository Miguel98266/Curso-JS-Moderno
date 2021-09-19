// document.addEventListener('DOMContentLoaded',obtenerDatos)

const cargarJsonArrayBtn = document.querySelector('#cargarJSONArray');
cargarJsonArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => {
            return respuesta.json()
        })
        .then(datos => {
            mostrarHTML(datos);
        })
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = '';
    empleados.forEach(empleado => {
        const { id, nombre, empresa, trabajo } = empleado;
        html += `
        <p>Empleado: ${nombre} </p>
        <p>Id: ${id} </p>
        <p>empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>
        `
    });

    contenido.innerHTML = html;
}