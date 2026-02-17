Feature: Test UI methods
  As a Chambers.com user
  I want to be able to search firm or lawyer
  So that I can verify if correct firm or lawyer profile is displayed

  @uiTests
  @regression
  Scenario Outline: Global Search Firm
    Given I navigate to Chambers new homepage
    When I search on global header with "firm", "<name>", "<na>", "<location>" and "<guide>"
    And I am navigated to "firm" "<name>" page

    # title-format: Global Search Firm: <name> in <location>
    Examples:
      | name           | na | location | guide |
      | Baker McKenzie | na | Chicago  | USA   |

  @uiTests
  @regression
  Scenario Outline: Global Search Individual
    Given I navigate to Chambers new homepage
    When I search on global header with "individual", "<name>", "<firmName>", "<location>" and "<guide>"
    And I am navigated to "individual" "<name>" page

    # title-format: Global Search Individual: <name> at <firmName>
    Examples:
      | name        | firmName        | location | guide |
      | Mark London | Devonshires LLP | London   | UK    |

  @uiTests
  @regression
  Scenario Outline: Home Page Search Firm
    Given I navigate to Chambers new homepage
    When I search on home page with "firm", "<name>", "<firmName>", "<location>" and "<guide>"
    And I am navigated to "firm" "<name>" page

    # title-format: Home Page Search Firm: <name>
    Examples:
      | name           | na | location | guide |
      | Baker McKenzie | na | Chicago  | USA   |

  @uiTests
  @regression
  Scenario Outline: Home Page Search Individual
    Given I navigate to Chambers new homepage
    When I search on home page with "individual", "<individualName>", "<firmName>", "<location>" and "<guide>"
    And I am navigated to "individual" "<individualName>" page

    # title-format: Home Page Search Individual: <individualName>
    Examples:
      | individualName | firmName        | location | guide |
      | Mark London    | Devonshires LLP | London   | UK    |