class Cliente {
  //Class declaration

  #nombre; //Declarar privada la propiedad

  constructor(nombre, saldo) {
    this.#nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.#nombre} Tu saldo es: ${this.saldo}`;
  }

  // Static pertenece a la clase no al objeto
  static bienvenida() {
    return `Bienvenida al Cajero`;
  }
}

const miguel = new Cliente("Miguel", 1000);
console.log(miguel.mostrarInformacion())
// console.log(miguel.#nombre);
