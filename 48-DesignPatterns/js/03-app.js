// Singleton
// Va a prevenir que no se puedan crear múltiples instancias del 
// mismo objeto o que la clase no pueda ser distanciada.

let instancia=null;

class Persona{
    constructor(nombre,email){
        if(!instancia){
            this.nombre=nombre;
        this.email=email;
        instancia=this;
        }else{
            return instancia;
        }
    }
}

const persona=new Persona('Miguel','email@ejemplo.com');
console.log(persona);
const persona2=new Persona('Angel','email@ejemplo.com');
console.log(persona);