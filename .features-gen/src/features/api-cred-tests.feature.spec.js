// Generated from: src\features\api-cred-tests.feature
import { test } from "../../../src/fixtures/fixtures.ts";

test.describe('API CRUD Operations', () => {

  test('Create, Read, Update, and Delete a post', { tag: ['@api'] }, async ({ Given, When, Then, And, apiResponse, request }) => { 
    await Given('I send a POST request to "/posts" with title "BDD Test" and body "Playwright is awesome"', null, { apiResponse, request }); 
    await Then('the response status should be 201', null, { apiResponse }); 
    await And('the response body should contain title "BDD Test"', null, { apiResponse }); 
    await When('I send a GET request to "/posts/1"', null, { apiResponse, request }); 
    await Then('the response status should be 200', null, { apiResponse }); 
    await And('the response body should contain id 1', null, { apiResponse }); 
    await When('I send a PUT request to "/posts/1" with updated title "Updated BDD Test"', null, { apiResponse, request }); 
    await Then('the response status should be 200', null, { apiResponse }); 
    await And('the response body should contain title "Updated BDD Test"', null, { apiResponse }); 
    await When('I send a DELETE request to "/posts/1"', null, { apiResponse, request }); 
    await Then('the response status should be 200', null, { apiResponse }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\api-cred-tests.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@api"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I send a POST request to \"/posts\" with title \"BDD Test\" and body \"Playwright is awesome\"","stepMatchArguments":[{"group":{"start":25,"value":"\"/posts\"","children":[{"start":26,"value":"/posts","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"BDD Test\"","children":[{"start":46,"value":"BDD Test","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":65,"value":"\"Playwright is awesome\"","children":[{"start":66,"value":"Playwright is awesome","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 201","stepMatchArguments":[{"group":{"start":30,"value":"201","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And the response body should contain title \"BDD Test\"","stepMatchArguments":[{"group":{"start":39,"value":"\"BDD Test\"","children":[{"start":40,"value":"BDD Test","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I send a GET request to \"/posts/1\"","stepMatchArguments":[{"group":{"start":24,"value":"\"/posts/1\"","children":[{"start":25,"value":"/posts/1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And the response body should contain id 1","stepMatchArguments":[{"group":{"start":36,"value":"1","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I send a PUT request to \"/posts/1\" with updated title \"Updated BDD Test\"","stepMatchArguments":[{"group":{"start":24,"value":"\"/posts/1\"","children":[{"start":25,"value":"/posts/1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"Updated BDD Test\"","children":[{"start":55,"value":"Updated BDD Test","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the response body should contain title \"Updated BDD Test\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Updated BDD Test\"","children":[{"start":40,"value":"Updated BDD Test","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I send a DELETE request to \"/posts/1\"","stepMatchArguments":[{"group":{"start":27,"value":"\"/posts/1\"","children":[{"start":28,"value":"/posts/1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end