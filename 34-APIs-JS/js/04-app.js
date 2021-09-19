const abrirBtn=document.querySelector('#abrir-pantalla-completa');
const cerrarBtn=document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click',pantallaCompleta);
cerrarBtn.addEventListener('click',cerrarCompleta);

function pantallaCompleta(){
    document.documentElement.requestFullscreen();
}

function cerrarCompleta(){
    document.exitFullscreen();
}
