// Implicit Binding
// En que parte va a encontrar los valores del objecto usando this.


const usuario={
    nombre:'Miguel',
    edad:20,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
    },
    mascota:{
        nombre:'Hook',
        edad:1,
        informacion(){
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
        }
    }
}

usuario.informacion();

usuario.mascota.informacion();