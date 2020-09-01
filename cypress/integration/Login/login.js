import { Given, When, And } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I am in hudson login page', () => {
    cy.visit('https://qa-dentsu.hudsonmx.net/#/login');
   
})

When('I complete the requiere fields',() => {
    cy.get('#username').type('carat.manager');
    cy.get('.btn').click();
    cy.get('#password').type('d5vN9uYD');
   
})

And ('I click the login button',() => {
    cy.get('.login-btn').click();
})

Then('I should see the home page', ()=>{
   
  cy.get('img', { timeout: 10000 }).should('be.visible');
  

})