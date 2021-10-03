const cliente={
    nombre:'Miguel Calixto',
    balance:500
};

describe('Testing al Cliente',()=>{
    test('El cliente es premium',()=>{
        expect(cliente.balance).toBeGreaterThan(400);
    });
    
    test('El nombre es Miguel Calixto',()=>{
        expect(cliente.nombre).toBe('Miguel Calixto');
    });

    test('No es otro cliente',()=>{
        expect(cliente.nombre).not.toBe('Angel');
    });

    test('No tiene 500',()=>{
        expect(cliente.balance).not.toBe(400);
    });
});