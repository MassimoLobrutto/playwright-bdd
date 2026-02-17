Feature: Session Validation using Stored Authentication from Playwright Config

  Scenario: Verify direct access to inventory
    Given I navigate to the inventory page
    Then I should see the products title