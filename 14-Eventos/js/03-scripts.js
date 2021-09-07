//Eventos sobre los Inputs
const busqueda= document.querySelector('.busqueda');

// busqueda.addEventListener('keydown',()=>{
//     console.log('Se presiono la tecla...'); //se dispara cuando se presiona una tecla
// });
// busqueda.addEventListener('keyup',()=>{
//     console.log('Solto la tecla...'); //ocurre cuando se suelta una tecla del teclado
// });
busqueda.addEventListener('blur',()=>{
    console.log('perdio foco...'); //se dispara cuando un elemento ha perdido el foco.
});

busqueda.addEventListener('copy',()=>{
    console.log('perdio foco...'); //se activa cuando el usuario inicia una acción de copia 
                                   //a través de la interfaz de usuario del navegador
});
busqueda.addEventListener('cut',()=>{
    console.log('perdio foco...'); //se activa cuando el usuario inicia una acción de cortar 
                                   //a través de la interfaz de usuario del navegador
});
busqueda.addEventListener('paste',()=>{
    console.log('perdio foco...'); //se activa cuando el usuario inicia una acción de pegar 
                                   //a través de la interfaz de usuario del navegador
});
busqueda.addEventListener('input',(event)=>{
    if (event.target.value==="") {  //se activa cuando se cambia el valor de un elemento  
        console.log('Fallo la validacion')//<input>, <select> o <textarea>
    }
});