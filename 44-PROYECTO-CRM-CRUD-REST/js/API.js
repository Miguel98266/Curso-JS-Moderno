const url='http://localhost:4000/clientes';

export const nuevoCliente=cliente=>{
    
    console.log(cliente);

     try {
         fetch(url,{
             method:'POST',
             body: JSON.stringify(cliente),
             headers:{
                 
             }
         })
     } catch (error) {
         console.log(error)
     }
}