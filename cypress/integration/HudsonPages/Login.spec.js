//Esta linea la necesito para usar cypress 
/// <reference types ="Cypress"/>

describe('Login', function(){
    //Esto hace que el tiempo de carga sea igual en tooda la clase
    Cypress.config('pageLoadTimeout',1000);

    it ('Sign in', function(){
        cy.visit('https://qa-dentsu.hudsonmx.net/#/login');
        cy.get('#username').type('carat.manager');
        cy.get('.btn').click();
        cy.get('#password').type('d5vN9uYD');
        cy.get('.login-btn').click();

    })
}




)