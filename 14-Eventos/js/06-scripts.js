//Event bubbling

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

cardDiv.addEventListener("click", (evento) => {
  evento.stopPropagation();
  console.log("clic en card");
});
infoDiv.addEventListener("click", (evento) => {
  evento.stopPropagation();
  console.log("clic en info");
});
titulo.addEventListener("click", (evento) => {
  evento.stopPropagation();
  console.log("clic en titulo");
});
