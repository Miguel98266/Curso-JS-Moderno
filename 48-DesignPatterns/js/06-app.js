// console.log(modulo1.nombre);

// modulo1.hola();

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}
const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`)
    }
}

// Añadir funcionesPersonas a la clase Persona
Object.assign(Persona.prototype, funcionesPersona)
Object.assign(Cliente.prototype, funcionesPersona)

const cliente = new Persona('Miguel', 'corre@correo.com');

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Cliente('Cliente', 'cliente@cliente.com')
cliente2.mostrarInformacion();
cliente2.mostrarNombre();