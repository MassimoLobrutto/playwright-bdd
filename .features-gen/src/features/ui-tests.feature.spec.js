// Generated from: src\features\ui-tests.feature
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe('Test UI methods', () => {

  test('Login to admin dashboard', { tag: ['@uiTests', '@regression'] }, async ({ Given, When, Then, adminDashboardPage, adminLoginPage, homepage, page }) => { 
    await Given('I navigate to shady meadows admin page', null, { homepage, page }); 
    await When('I login with valid credentials', null, { adminLoginPage }); 
    await Then('I should see the admin dashboard', null, { adminDashboardPage }); 
  });

  test.describe('Book a room', () => {

    test('Example #1', { tag: ['@uiTests', '@regression'] }, async ({ Given, When, homepage, page, roomPage, scenarioData }) => { 
      await Given('I navigate to the homepage', null, { page, scenarioData }); 
      await When('I search for available rooms from "05/03/2026" to "10/03/2026"', null, { homepage }); 
      await When('I select "Single" room and check that the price per night is "100"', null, { homepage, roomPage }); 
      await When('I check that the total price is "540" and then reserve the room', null, { roomPage }); 
      await When('I fill in the booking form with valid details and submit', null, { roomPage, scenarioData }); 
    });

    test('Example #2', { tag: ['@uiTests', '@regression'] }, async ({ Given, When, homepage, page, roomPage, scenarioData }) => { 
      await Given('I navigate to the homepage', null, { page, scenarioData }); 
      await When('I search for available rooms from "05/04/2026" to "10/04/2026"', null, { homepage }); 
      await When('I select "Double" room and check that the price per night is "150"', null, { homepage, roomPage }); 
      await When('I check that the total price is "790" and then reserve the room', null, { roomPage }); 
      await When('I fill in the booking form with valid details and submit', null, { roomPage, scenarioData }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\ui-tests.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":9,"tags":["@uiTests","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I navigate to shady meadows admin page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I login with valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see the admin dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":26,"tags":["@uiTests","@regression"],"steps":[{"pwStepLine":15,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I search for available rooms from \"05/03/2026\" to \"10/03/2026\"","stepMatchArguments":[{"group":{"start":34,"value":"\"05/03/2026\"","children":[{"start":35,"value":"05/03/2026","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"10/03/2026\"","children":[{"start":51,"value":"10/03/2026","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I select \"Single\" room and check that the price per night is \"100\"","stepMatchArguments":[{"group":{"start":9,"value":"\"Single\"","children":[{"start":10,"value":"Single","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":61,"value":"\"100\"","children":[{"start":62,"value":"100","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I check that the total price is \"540\" and then reserve the room","stepMatchArguments":[{"group":{"start":32,"value":"\"540\"","children":[{"start":33,"value":"540","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I fill in the booking form with valid details and submit","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":27,"tags":["@uiTests","@regression"],"steps":[{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I navigate to the homepage","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I search for available rooms from \"05/04/2026\" to \"10/04/2026\"","stepMatchArguments":[{"group":{"start":34,"value":"\"05/04/2026\"","children":[{"start":35,"value":"05/04/2026","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"10/04/2026\"","children":[{"start":51,"value":"10/04/2026","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I select \"Double\" room and check that the price per night is \"150\"","stepMatchArguments":[{"group":{"start":9,"value":"\"Double\"","children":[{"start":10,"value":"Double","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":61,"value":"\"150\"","children":[{"start":62,"value":"150","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I check that the total price is \"790\" and then reserve the room","stepMatchArguments":[{"group":{"start":32,"value":"\"790\"","children":[{"start":33,"value":"790","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I fill in the booking form with valid details and submit","stepMatchArguments":[]}]},
]; // bdd-data-end