///<reference types="cypress"/>

const faker = require('faker-br');

describe('Funcionalidade Pré cadastro', () => {
    
beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});



it('Deve completar o pré cadastro com sucesso', () => {
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('12345678')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type('Luis')
    cy.get('#account_last_name').type('Camerom')
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

});


});