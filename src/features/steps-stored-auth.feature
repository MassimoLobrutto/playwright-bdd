Feature: Session Validation using Stored Authentication from tests file

  @booker
  Scenario: Verify Admin can see the room management list
    Given I am on the Booker Admin dashboard
    Then I should see the "Rooms" management section
    And the "Logout" button should be visible