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

const miguel=new Cliente('Miguel',3000);
console.log(miguel);
console.log(miguel.mostrarInformacion());
console.log(Cliente.bienvenida())


const Cliente2 = class{ //Class expresion
    constructor(nombre,saldo){
        this.nombre=nombre;
        this.saldo=saldo;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} Tu saldo es: ${this.saldo}`
    }
}

const miguel2=new Cliente2('Miguel',3000);
console.log(miguel2);
console.log(miguel2.mostrarInformacion())