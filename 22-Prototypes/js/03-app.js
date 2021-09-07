function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
  let tipo;

  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platinum";
  } else {
    tipo = "Normal";
  }
  return tipo;
};

Cliente.prototype.nombreClienteSaldo=function(){
    return `Nombre ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo=function(retira){
    this.saldo-=retira;
}

// Instanciarlo
const miguel = new Cliente("Miguel", 6000);
console.log(miguel.tipoCliente());
console.log(miguel.nombreClienteSaldo());
miguel.retiraSaldo(1000);
console.log(miguel.nombreClienteSaldo());
console.log(miguel);

