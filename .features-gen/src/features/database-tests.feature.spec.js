// Generated from: src\features\database-tests.feature
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe('Test Database methods', () => {

  test('Verify database query results are printed correctly', { tag: ['@databaseTests', '@regression'] }, async ({ Given }) => { 
    await Given('I query db and print results'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\database-tests.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":["@databaseTests","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I query db and print results","stepMatchArguments":[]}]},
]; // bdd-data-end