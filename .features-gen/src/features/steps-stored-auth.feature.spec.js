// Generated from: src\features\steps-stored-auth.feature
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe('Session Validation using Stored Authentication from tests file', () => {

  test('Verify Admin can see the room management list', { tag: ['@stepStoredAuthTests', '@regression'] }, async ({ Given, Then, And, page }) => { 
    await Given('I am on the Booker Admin dashboard', null, { page }); 
    await Then('I should see the "Rooms" management section', null, { page }); 
    await And('the "Logout" button should be visible', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\steps-stored-auth.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@stepStoredAuthTests","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the Booker Admin dashboard","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Rooms\" management section","stepMatchArguments":[{"group":{"start":17,"value":"\"Rooms\"","children":[{"start":18,"value":"Rooms","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And the \"Logout\" button should be visible","stepMatchArguments":[{"group":{"start":4,"value":"\"Logout\"","children":[{"start":5,"value":"Logout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end