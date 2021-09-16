export const nombreCliente = "Miguel";
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
  return `Cliente ${nombre} - Ahorro ${ahorro}`;
}

export function tieneSaldo(ahorro) {
  if (ahorro > 0) {
    console.log("Si tienes saldo");
  } else {
    console.log("El Cliente no tiene saldo");
  }
}

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }
  mostrarInformacion(){
      return `Cliente ${this.nombre} - Ahorro ${this.ahorro}`;
  }
}


// Solo puede existir un export default
export default function nuevaFuncion(){
    console.log('Este es el export default');
}
