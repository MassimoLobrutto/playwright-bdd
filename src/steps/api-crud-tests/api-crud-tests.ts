/* eslint-disable no-empty-pattern */
import { expect, Given, When, Then } from '../../fixtures/fixtures';
import { logger } from '../../helper/logger/logger'; // Adjust path to your logger

const BASE_URL = 'https://jsonplaceholder.typicode.com';

Given(
  'I send a POST request to {string} with title {string} and body {string}',
  async ({ request, apiResponse }, path, title, body) => {
    const url = `${BASE_URL}${path}`;
    logger.info(`🚀 POST Request to: ${url}`);

    apiResponse.last = await request.post(url, {
      data: { title, body, userId: 1 },
    });

    const responseBody = await apiResponse.last.json();
    logger.info(`✅ POST Response Status: ${apiResponse.last.status()}`);
    logger.info(`📦 Response Body: ${JSON.stringify(responseBody)}`);
  }
);

When('I send a GET request to {string}', async ({ request, apiResponse }, path) => {
  const url = `${BASE_URL}${path}`;
  logger.info(`🔍 GET Request to: ${url}`);

  apiResponse.last = await request.get(url);

  logger.info(`✅ GET Response Status: ${apiResponse.last.status()}`);
});

When('I send a PUT request to {string} with updated title {string}', async ({ request, apiResponse }, path, title) => {
  const url = `${BASE_URL}${path}`;
  logger.info(`🔄 PUT Request to: ${url}`);

  apiResponse.last = await request.put(url, {
    data: { id: 1, title, body: 'updated body', userId: 1 },
  });

  logger.info(`✅ PUT Response Status: ${apiResponse.last.status()}`);
});

When('I send a DELETE request to {string}', async ({ request, apiResponse }, path) => {
  const url = `${BASE_URL}${path}`;
  logger.info(`🗑️ DELETE Request to: ${url}`);

  apiResponse.last = await request.delete(url);

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
