Feature: Login 

Scenario: Login successfully
Given I am in hudson login page
When I complete the requiere fields
And I click the login button
Then I should see the home page