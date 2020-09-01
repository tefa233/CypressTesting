import { Given, When,Then } from "cypress-cucumber-preprocessor/steps";

Given('Juan is logged as a manager', () => {
    cy.visit('https://qa-dentsu.hudsonmx.net/#/login');
    cy.get('#username').type('carat.manager');
    cy.get('.btn').click();
    cy.get('#password').type('d5vN9uYD');
    cy.get('.login-btn').click();
    cy.get('img', { timeout: 80000 }).should('be.visible');
   cy.wait(8000);
})





