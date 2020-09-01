Cypress.Commands.add("SignIn",()=>{
    cy.visit('https://qa-dentsu.hudsonmx.net/#/login');
    cy.get('#username').type('carat.manager');
    cy.get('.btn').click();
    cy.get('#password').type('d5vN9uYD');
    cy.get('.login-btn').click();
})