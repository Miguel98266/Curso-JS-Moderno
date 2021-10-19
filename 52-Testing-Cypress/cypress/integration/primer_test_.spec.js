/// <reference types="cypress" />
describe('Carga la pagina principal', () => {
    it('Carga la pagina principal', () => {

        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');

        // Verificar el elemento y su texto
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');
        
        // Verificar que exista
        cy.get('[data-cy="titulo-proyecto"]').should('exist');
        
        
        // Verificar el texto de las citas
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal','No hay Citas, comienza creando una')
    
        

    });
});