import { expect, Given, Then } from '../../fixtures/fixtures';

Given('I navigate to the inventory page', async ({ page }) => {
  // We go STRAIGHT to the internal page, skipping the login URL
  await page.goto('https://www.saucedemo.com/inventory.html');
});

Then('I should see the products title', async ({ page }) => {
  const title = page.locator('.title');
  await expect(title).toHaveText('Products');
});
