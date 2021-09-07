const cliente={
    nombre:'Juan',
    saldo:500
}
console.log(cliente)

function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
}

const miguel=new Cliente('Miguel',200)
console.log(miguel)