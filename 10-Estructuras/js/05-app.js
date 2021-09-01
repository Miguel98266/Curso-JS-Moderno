//Switch case

const metodoPago="efectivo";

switch (metodoPago) {
    case "efectivo":
        pagar();
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case "cheque":
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case "tarjeta":
        console.log(`Pagaste con ${metodoPago}`);
        break;
    
    default:
        console.log('Aun no has seleccionado un metodo de pago o metodo no soportado')
        break;
}

function pagar(){
    console.log('Pagando...')
}