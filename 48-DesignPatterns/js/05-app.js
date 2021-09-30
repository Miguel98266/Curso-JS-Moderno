// Module Pattern

// const mostrarCliente=nombre=>{
//     console.log(nombre);
// }
// export default mostrarCliente;

// const nombre='Miguel';


const modulo1=(function(){
    const nombre='Angel';

    function hola(){
        console.log('hola')
    }
    return{
        nombre,
        hola
    }
})();