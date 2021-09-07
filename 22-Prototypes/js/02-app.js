function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const miguel = new Cliente("Miguel", 200);
function formateraCliente(cliente) {
  const { nombre, saldo } = cliente;
  return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}
function formateraEmpresa(empresa) {
  const { nombre, saldo, categoria } = empresa;
  return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formateraCliente(miguel));

function Empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const CCJ = new Empresa("Codigo", 4000, "Cursos online");
console.log(formateraEmpresa(CCJ));
