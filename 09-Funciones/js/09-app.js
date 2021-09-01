const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion con el id ${id}`);
  },
  pausar: function () {
    console.log("pausando...");
  },
  borrar: function (id) {
    console.log(`Borrando cancion... ${id}`);
  },
  crearPlaylist: function (nombre) {
    console.log(`Se ha creado la playlist ${nombre}`);
  },
  reproduciendoPlaylist: function (nombre) {
    console.log(`Se esta reproduciendo ${nombre}`);
  },
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Heavi Metal");
reproductor.reproduciendoPlaylist("Rock 90s");
