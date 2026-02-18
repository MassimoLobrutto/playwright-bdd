// Generated from: src\features\global-stored-auth.feature
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe('Session Validation using Stored Authentication from Playwright Config', () => {

  test('Verify direct access to inventory', { tag: ['@globalStoredAuthTests', '@regression'] }, async ({ Given, Then, page }) => { 
    await Given('I navigate to the inventory page', null, { page }); 
    await Then('I should see the products title', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\global-stored-auth.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@globalStoredAuthTests","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to the inventory page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the products title","stepMatchArguments":[]}]},
]; // bdd-data-end