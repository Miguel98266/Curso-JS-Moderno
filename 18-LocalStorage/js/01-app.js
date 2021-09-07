localStorage.setItem('nombre','Miguel');

const producto={
    nombre:'Monitor 34 pulgadas',
    precio:300
}

const productoString=JSON.stringify(producto);
localStorage.setItem('producto',productoString)

const meses=['Enero','Febrero','Marzo'];
const mesesString=JSON.stringify(meses);
localStorage.setItem('meses',mesesString);