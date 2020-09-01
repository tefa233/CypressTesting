
import { Given, When,Then } from "cypress-cucumber-preprocessor/steps";
  
require("cypress-xpath");
    Cypress.Commands.add(
        "iframe",
        { prevSubject: "element" },
        ($iframe, callback = () => {}) => {
          cy.log("Getting iframe body");
          return cy
            .wrap($iframe)
            .should((iframe) => expect(iframe.contents().find("body")).to.exist)
            .then((iframe) => cy.wrap(iframe.contents().find("body")))
            .within({}, callback);
        }
      );
    


And('he Clicks on master data managment icon',() => {
    
    cy.wait(9000);
    cy.get("iframe").iframe(() => {
        cy.xpath(
          "/html/body/app-root/fury-layout/mat-drawer-container/mat-drawer-content/div/div/div/app-dashboard/div/div/app-dashboard-sections/div/div[2]/div/a[1]"
        ).click();
      });
    
    
})
