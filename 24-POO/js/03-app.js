class Cliente{//Class declaration
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} Tu saldo es: ${this.saldo}`
    }

    // Static pertenece a la clase no al objeto
    static bienvenida(){
        return `Bienvenida al Cajero`
    }
}

// Herencia
class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,categoria){
        super(nombre,saldo);
        this.telefono=telefono;
        this.categoria=categoria;
    }
    static bienvenida(){// Reescribir un metodo 
        return `Bienvenida al Cajero de empresas`
    }
}


const miguel=new Cliente('Miguel',3000);
console.log(miguel);
console.log(miguel.mostrarInformacion());
console.log(Cliente.bienvenida())


const empresa=new Empresa('Empresa',5000,10203912,'Aprendizaje en linea');
console.log(empresa);
console.log(empresa.mostrarInformacion())

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
