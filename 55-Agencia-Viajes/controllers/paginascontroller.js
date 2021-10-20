import { Viaje } from "../models/Viaje.js";
import { Testimoniales } from "../models/Testimoniales.js";

const paginaInicio = async (req, res) => {
  // Consultar 3 viajes del modelo Viaje

  const promiseDB = [];
  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimoniales.findAll({ limit: 3 }));
  try {
    const resultado = await Promise.all(promiseDB);

    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: resultado[0],
      testimoniales: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaNosotros = (req, res) => {
  //req-lo que enviamos : res lo que express
  //   const viajes = "Viaje a Alemania";
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
  // Consultar BD

  const viajes = await Viaje.findAll();
  console.log(viajes);

  res.render("viajes", {
    pagina: "Próximos Viajes",
    viajes: viajes,
  });
};

const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimoniales.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({ where: { slug: slug } });

    res.render("viaje", {
      pagina: "Informacion Viaje",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
};
