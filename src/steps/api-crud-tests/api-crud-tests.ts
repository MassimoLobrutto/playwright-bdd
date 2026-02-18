import { expect, Given, When, Then } from '../../fixtures/fixtures';
import { logger } from '../../helper/logger/logger';

Given(
  'I send a POST request to {string} with title {string} and body {string}',
  async ({ apiController, apiResponse }, path, title, body) => {
    apiResponse.last = await apiController.createPost(path, title, body);

    const responseBody = await apiResponse.last.json();

    // Now we ARE reading the value, so the error vanishes!
    logger.info(`📦 Response Body: ${JSON.stringify(responseBody)}`);

    // Optional: Standard industry practice is to assert something immediately
    expect(responseBody.title).toBe(title);
  }
);

When('I send a GET request to {string}', async ({ apiController, apiResponse }, path) => {
  apiResponse.last = await apiController.getPost(path);
  logger.info(`✅ GET Response Status: ${apiResponse.last.status()}`);
});

When(
  'I send a PUT request to {string} with updated title {string}',
  async ({ apiController, apiResponse }, path, title) => {
    apiResponse.last = await apiController.updatePost(path, title);
    logger.info(`✅ PUT Response Status: ${apiResponse.last.status()}`);
  }
);

When('I send a DELETE request to {string}', async ({ apiController, apiResponse }, path) => {
  apiResponse.last = await apiController.deletePost(path);
  logger.info(`✅ DELETE Response Status: ${apiResponse.last.status()}`);
});

Then('the response status should be {int}', async ({ apiResponse }, statusCode) => {
  const actualStatus = apiResponse.last.status();
  logger.info(`🧪 Validating Status: Expected ${statusCode}, Got ${actualStatus}`);
  expect(actualStatus).toBe(statusCode);
});

Then('the response body should contain title {string}', async ({ apiResponse }, expectedTitle) => {
  const body = await apiResponse.last.json();
  logger.info(`🧪 Validating Title: Expected "${expectedTitle}", Got "${body.title}"`);
  expect(body.title).toBe(expectedTitle);
});

Then('the response body should contain id {int}', async ({ apiResponse }, expectedId) => {
  const body = await apiResponse.last.json();
  logger.info(`🧪 Validating ID: Expected ${expectedId}, Got ${body.id}`);
  expect(body.id).toBe(expectedId);
});
