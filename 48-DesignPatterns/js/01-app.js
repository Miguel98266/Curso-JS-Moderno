// Class Pattern

class Persona{
    constructor(nombre,email){
        this.nombre=nombre;
        this.email=email;
    }
}

const persona=new Persona('Miguel','ejemplo@ejemplo.com');
console.log(persona)