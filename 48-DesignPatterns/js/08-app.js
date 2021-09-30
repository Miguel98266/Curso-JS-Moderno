function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo},iniciamos con ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}
function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`)
    }
}
function Subasta() {
    let compradores = {};
    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}


// Crear objetos
const juan = new Comprador('Miguel');
const angel = new Comprador('Angel');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();

// Tienes que registrarlos
subasta.registrar(juan);
subasta.registrar(angel);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);

juan.oferta(350, juan);
angel.oferta(450, angel);
juan.oferta(500, juan);
angel.oferta(700, angel);

vendedor.vendido('Pablo');