const cliente = {
    nombre: 'Miguel Angel',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Miguel', () => {
        expect(cliente).toMatchSnapshot();
    });
});