// Generated from: src\features\uiTests.feature
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe('Test UI methods', () => {

  test.describe('Global Search Firm', () => {

    test('Global Search Firm: Baker McKenzie in Chicago', { tag: ['@uiTests', '@regression'] }, async ({ Given, When, And, firmPage, lawyerPage, page, searchPage }) => { 
      await Given('I navigate to Chambers new homepage', null, { page }); 
      await When('I search on global header with "firm", "Baker McKenzie", "na", "Chicago" and "USA"', null, { searchPage }); 
      await And('I am navigated to "firm" "Baker McKenzie" page', null, { firmPage, lawyerPage }); 
    });

  });

  test.describe('Global Search Individual', () => {

    test('Global Search Individual: Mark London at Devonshires LLP', { tag: ['@uiTests', '@regression'] }, async ({ Given, When, And, firmPage, lawyerPage, page, searchPage }) => { 
      await Given('I navigate to Chambers new homepage', null, { page }); 
      await When('I search on global header with "individual", "Mark London", "Devonshires LLP", "London" and "UK"', null, { searchPage }); 
      await And('I am navigated to "individual" "Mark London" page', null, { firmPage, lawyerPage }); 
    });

  });

  test.describe('Home Page Search Firm', () => {

    test('Home Page Search Firm: Baker McKenzie', { tag: ['@uiTests', '@regression'] }, async ({ Given, When, And, firmPage, lawyerPage, page, searchPage }) => { 
      await Given('I navigate to Chambers new homepage', null, { page }); 
      await When('I search on home page with "firm", "Baker McKenzie", "<firmName>", "Chicago" and "USA"', null, { searchPage }); 
      await And('I am navigated to "firm" "Baker McKenzie" page', null, { firmPage, lawyerPage }); 
    });

  });

  test.describe('Home Page Search Individual', () => {

    test('Home Page Search Individual: Mark London', { tag: ['@uiTests', '@regression'] }, async ({ Given, When, And, firmPage, lawyerPage, page, searchPage }) => { 
      await Given('I navigate to Chambers new homepage', null, { page }); 
      await When('I search on home page with "individual", "Mark London", "Devonshires LLP", "London" and "UK"', null, { searchPage }); 
      await And('I am navigated to "individual" "Mark London" page', null, { firmPage, lawyerPage }); 
    });

  });

  test('Verify that search results are displayed when user searches with valid keyword', async ({ Given }) => { 
    await Given('I query db and print results'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\uiTests.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":16,"tags":["@uiTests","@regression"],"steps":[{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I navigate to Chambers new homepage","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I search on global header with \"firm\", \"Baker McKenzie\", \"na\", \"Chicago\" and \"USA\"","stepMatchArguments":[{"group":{"start":31,"value":"\"firm\"","children":[{"start":32,"value":"firm","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"Baker McKenzie\"","children":[{"start":40,"value":"Baker McKenzie","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":57,"value":"\"na\"","children":[{"start":58,"value":"na","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":63,"value":"\"Chicago\"","children":[{"start":64,"value":"Chicago","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":77,"value":"\"USA\"","children":[{"start":78,"value":"USA","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I am navigated to \"firm\" \"Baker McKenzie\" page","stepMatchArguments":[{"group":{"start":18,"value":"\"firm\"","children":[{"start":19,"value":"firm","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":25,"value":"\"Baker McKenzie\"","children":[{"start":26,"value":"Baker McKenzie","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":28,"tags":["@uiTests","@regression"],"steps":[{"pwStepLine":19,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given I navigate to Chambers new homepage","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I search on global header with \"individual\", \"Mark London\", \"Devonshires LLP\", \"London\" and \"UK\"","stepMatchArguments":[{"group":{"start":31,"value":"\"individual\"","children":[{"start":32,"value":"individual","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"Mark London\"","children":[{"start":46,"value":"Mark London","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":60,"value":"\"Devonshires LLP\"","children":[{"start":61,"value":"Devonshires LLP","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":79,"value":"\"London\"","children":[{"start":80,"value":"London","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":92,"value":"\"UK\"","children":[{"start":93,"value":"UK","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And I am navigated to \"individual\" \"Mark London\" page","stepMatchArguments":[{"group":{"start":18,"value":"\"individual\"","children":[{"start":19,"value":"individual","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"Mark London\"","children":[{"start":32,"value":"Mark London","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":40,"tags":["@uiTests","@regression"],"steps":[{"pwStepLine":29,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given I navigate to Chambers new homepage","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When I search on home page with \"firm\", \"Baker McKenzie\", \"<firmName>\", \"Chicago\" and \"USA\"","stepMatchArguments":[{"group":{"start":27,"value":"\"firm\"","children":[{"start":28,"value":"firm","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"\"Baker McKenzie\"","children":[{"start":36,"value":"Baker McKenzie","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"<firmName>\"","children":[{"start":54,"value":"<firmName>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":67,"value":"\"Chicago\"","children":[{"start":68,"value":"Chicago","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":81,"value":"\"USA\"","children":[{"start":82,"value":"USA","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And I am navigated to \"firm\" \"Baker McKenzie\" page","stepMatchArguments":[{"group":{"start":18,"value":"\"firm\"","children":[{"start":19,"value":"firm","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":25,"value":"\"Baker McKenzie\"","children":[{"start":26,"value":"Baker McKenzie","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":52,"tags":["@uiTests","@regression"],"steps":[{"pwStepLine":39,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given I navigate to Chambers new homepage","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When I search on home page with \"individual\", \"Mark London\", \"Devonshires LLP\", \"London\" and \"UK\"","stepMatchArguments":[{"group":{"start":27,"value":"\"individual\"","children":[{"start":28,"value":"individual","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"Mark London\"","children":[{"start":42,"value":"Mark London","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":56,"value":"\"Devonshires LLP\"","children":[{"start":57,"value":"Devonshires LLP","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":75,"value":"\"London\"","children":[{"start":76,"value":"London","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":88,"value":"\"UK\"","children":[{"start":89,"value":"UK","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"And I am navigated to \"individual\" \"Mark London\" page","stepMatchArguments":[{"group":{"start":18,"value":"\"individual\"","children":[{"start":19,"value":"individual","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"Mark London\"","children":[{"start":32,"value":"Mark London","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":54,"tags":[],"steps":[{"pwStepLine":47,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given I query db and print results","stepMatchArguments":[]}]},
]; // bdd-data-end