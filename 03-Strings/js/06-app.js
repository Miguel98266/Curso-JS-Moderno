const producto='Monitor 20 pulgadas';

//.repeat te va a permitir repetir una cadena de texto

const texto= ' en Promocion'.repeat(4);

//Si a repeat le pasas un numero no entero que hace?
//El numero se redondea y va a repetir esa cantidad de veces

console.log(texto);
console.log(`${producto} ${texto}!!!!`);

//.Split, dividir un string

const actividad="Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies='Leer, caminar, escuchar musica , escribir , aprender a programar';

console.log(hobbies.split(", "));

const tweet="Aprendiendo JavaScript #Aprendiendo";

console.log(tweet.split("#"));