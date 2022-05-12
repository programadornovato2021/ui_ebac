/// <reference types="cypress"/>

context('Funcionalidade de Login', () => {
    
    it('Deve fazer login com sucesso', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('contato@thiagosilvafotos.com')
        cy.get('#password').type('maluco123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(2)').should('contain', 'contato')

        
    });


    it('Deve exibir uma mensagem de erro ao inserir usuario  inválidos', () => {
       
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('contato@thiagosilvafotos')
        cy.get('#password').type('maluco123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','')
        
        
    });


    it('Deve exibir uma mensagem de erro ao inserir senha inválidos', () => {
       
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('contato@thiagosilvafotos.com')
        cy.get('#password').type('maluco12223')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail contato@thiagosilvafotos.com está incorreta. Perdeu a senha?')
        
        
    });
});