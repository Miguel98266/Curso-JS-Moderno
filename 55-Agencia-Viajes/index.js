import express from "express";

const app = express();

// Definir puerto
const puerto = process.env.PORT || 4000;

app.get("/", (req,res) => { //req-lo que enviamos : res lo que express
    res.send('Inicio');
});
app.get("/nosotros", (req,res) => { //req-lo que enviamos : res lo que express
    res.send('nosotros');
});
app.get("/contacto", (req,res) => { //req-lo que enviamos : res lo que express
    res.send('contacto');
});

app.listen(puerto, () => {
  console.log(`El servidor esta funcionando en el puerto ${puerto}`);
});
