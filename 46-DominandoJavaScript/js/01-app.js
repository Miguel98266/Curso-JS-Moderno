const login=true;

function clienteLogueado(){
    const cliente='Miguel';
    console.log(cliente);

    if(login){
        const cliente='Admin';
        console.log(cliente);
    }
}

clienteLogueado();