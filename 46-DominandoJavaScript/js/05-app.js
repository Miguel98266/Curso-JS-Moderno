// Explicit Binding...

// Cuál es la diferencia entre call y apply ?

// En call tienes que pasarle cada elemento de forma individual,}
//  mientras que en apply le puedes pasar un arreglo completo

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y Escucho ${el1} y ${el2}`)
}

const informacion = {
    nombre: 'Miguel'
}

const musicaFavorita = ['Heavy Metal', 'Rock'];


persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

persona.apply(informacion, musicaFavorita);

// Crea una nueva FUNCION
const nuevaFn=persona.bind(informacion, musicaFavorita[0], musicaFavorita[1])
nuevaFn();