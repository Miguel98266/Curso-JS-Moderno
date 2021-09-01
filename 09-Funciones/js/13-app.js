const reproductor = {
  cancion: "",
  reproducir: (id) => console.log(`Reproduciendo cancion con el id ${id}`),
  pausar: () => console.log("pausando..."),
  borrar: (id) => console.log(`Borrando cancion... ${id}`),
  crearPlaylist: (nombre) => console.log(`Se ha creado la playlist ${nombre}`),
  reproduciendoPlaylist: (nombre) =>
    console.log(`Se esta reproduciendo ${nombre}`),
  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo cancion ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = "Enter Sandam";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Heavi Metal");
reproductor.reproduciendoPlaylist("Rock 90s");
