/// <reference types="cypress" />
describe('Llena los campos para una nueva cita y la elimina', () => {
    it('Campos nueva cita', () => {

        cy.visit('/index.html');

        cy.get('[data-cy=mascota-input]')
            .type('Hook');

        cy.get('[data-cy=propietario-input]')
            .type('Miguel Calixto');

        cy.get('[data-cy=telefono-input]')
            .type('5562989467');

        cy.get('[data-cy=fecha-input]')
            .type('2021-10-04');

        cy.get('[data-cy=hora-input]')
            .type('13:30');

        cy.get('[data-cy=sintomas-input]')
            .type('El perro solo come y duerme');

        cy.get('[data-cy=submit-cita]')
            .click();

        //Verificar que exista el elemento y contenga un texto
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        // Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');

        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success');
            
        cy.screenshot();
    });

    it('Eliminar la cita',()=>{
        cy.get('[data-cy=btn-eliminar]')
            .click();

        cy.get('[data-cy="citas-heading"]')
        .invoke('text')
        .should('equal', 'No hay Citas, comienza creando una');
    });
});