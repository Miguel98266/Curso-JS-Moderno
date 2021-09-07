//Evento al dar scroll con el mouse

window.addEventListener("scroll", () => {
  const premium = document.querySelector(".premium");
  const ubicacion = premium.getBoundingClientRect(); //En que lugar se encuntra un elemento 

  if (ubicacion.top < 784) {
    console.log("El elemento ya esta visible");
  } else {
    console.log("Aún no da mas scroll");
  }
});
