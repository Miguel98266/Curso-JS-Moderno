import { Cliente } from "./cliente.js";

export class Empresa extends Cliente{
    constructor(nombre,ahorrro,categoria){
        super(nombre,ahorrro);
        this.categoria=categoria;
    }
    mostrarInformacion(){
        return `Cliente ${this.nombre} - Ahorro ${this.ahorro} -Categoria ${this.categoria}`;
    }
}