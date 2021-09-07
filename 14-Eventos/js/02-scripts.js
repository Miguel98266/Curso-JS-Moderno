//Eventos con el Mouse

const nav = document.querySelector(".navegacion");

//Registrar un evento
nav.addEventListener('click',()=>{
    console.log('Clic en nav')
});
nav.addEventListener("mouseout", () => {
  console.log("Saliendo a la navegacion"); //Saliendo encima del nav

  nav.style.backgroundColor = "transparent";
});

nav.addEventListener("mouseenter", () => {
  console.log("Entrando a la navegacion"); //Poniendo encima del nav
  nav.style.backgroundColor = "white";
});
nav.addEventListener("mousedown", () => {
  console.log("Entrando a la navegacion"); //Dando clic en el nav
  nav.style.backgroundColor = "white";
});
nav.addEventListener("click", () => {
  console.log("Entrando a la navegacion"); //Dando clic en el nav
  nav.style.backgroundColor = "white";
});
nav.addEventListener("mouseup", () => {
  console.log("Entrando a la navegacion"); //Cuando suelta el clic en el nav
  nav.style.backgroundColor = "white";
});
nav.addEventListener("dblclick", () => {
  console.log("Entrando a la navegacion"); //Cuando suelta el clic en el nav
  nav.style.backgroundColor = "white";
  
});

//mousedown - similar al click
//click
//dblclick - doble click
//mouseup - cuando sueltas el mouse
