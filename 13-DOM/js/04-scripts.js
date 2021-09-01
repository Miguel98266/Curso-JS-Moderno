const card = document.querySelector(".card");
//Solo retorna el primero que encuntre

console.log(card);

//Podemos tener selectores especificos como en Css

const info = document.querySelector(".premium .info");

console.log(info);

//Seleccionar el segundo card de hospedaje
const segundocard = document.querySelector("section.hospedaje .card:nth-child(2)");
console.log(segundocard);


//Seleccionar el formulario
const formulario=document.querySelector('#formulario');
console.log(formulario);

//Seleccionar elementos HTML
const navegacion=document.querySelector('nav');
console.log(navegacion);