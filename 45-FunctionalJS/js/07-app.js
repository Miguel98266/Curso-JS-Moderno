// Funciones que retornan funciones

const obtenerCliente=()=>()=>console.log('Miguel')

const fn=obtenerCliente();

fn();