// Namespace

const restaurantAPP = {};

restaurantAPP.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 25
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    },
];

restaurantAPP.funciones = {
    mostrarMenu: (platillos) => {
        console.log('Bienvenidos a nuestro menu');

        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} ${platillo.precio}`)
        });
    },
    ordenar: id => {
        console.log(`Tu Platillo: ${restaurantAPP.platillos[id].platillo} se esta preparando`)
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };
        restaurantAPP.platillos.push(nuevo);
    }
}
array.forEach(element => {
    
});

restaurantAPP.funciones.ordenar(1);

restaurantAPP.funciones.agregarPlatillo('Taco', 20)

const { platillos } = restaurantAPP;

restaurantAPP.funciones.mostrarMenu(platillos);