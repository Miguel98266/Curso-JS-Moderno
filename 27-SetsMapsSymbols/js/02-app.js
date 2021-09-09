// WeakSet
// Solo acepta objetos

const weakset = new WeakSet();

const cliente = {
    nombre: 'miguel',
    saldo: 100
}



weakset.add(cliente);

console.log(weakset.has(cliente));

// weakset.delete(cliente);

// No existe .size y tampoco son iterables
console.log(weakset.size);

console.log(weakset);