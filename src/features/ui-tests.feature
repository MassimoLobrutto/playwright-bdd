Feature: Test UI methods
  As an admin user
  I want to be able to login to the admin dashboard
  To make changes to the content
  So that I can keep the website up to date

  @uiTests
  @regression
  Scenario: Login to admin dashboard
    Given I navigate to shady meadows admin page
    When I login with valid credentials
    Then I should see the admin dashboard

  @uiTests
  @regression
  Scenario Outline: Book a room
    Given I navigate to the homepage
    When I search for available rooms from "<checkInDate>" to "<checkOutDate>"
    When I select "<roomType>" room and check that the price per night is "<pricePernight>"
    When I check that the total price is "<totalPrice>" and then reserve the room
    When I fill in the booking form with valid details and submit
    #Then I should see a Booking Confirmed message

    Examples:
        | roomType | checkInDate | checkOutDate | pricePernight | totalPrice |
        | Single   | 05/03/2026  | 10/03/2026   | 100           | 540        |
        | Double   | 05/04/2026  | 10/04/2026   | 150           | 790        |
