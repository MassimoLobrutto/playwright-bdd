import path from 'node:path';
import fs from 'node:fs';
import { expect, Given, Then } from '../../fixtures/fixtures';

Given('I am on the Booker Admin dashboard', async ({ page }) => {
  const authPath = path.resolve(__dirname, '../../.auth/booker_user.json');
  const authData = JSON.parse(fs.readFileSync(authPath, 'utf-8'));

  await page.context().clearCookies();
  await page.context().addCookies(authData.cookies);

  await page.goto('https://automationintesting.online/');
  await page.getByRole('link', { name: 'Admin', exact: true }).click();
  await expect(page.getByText('Room details')).toBeVisible();
});

Then('I should see the {string} management section', async ({ page }, sectionName: string) => {
  const section = page.getByRole('link', { name: sectionName });
  await expect(section).toBeVisible();
});

Then('the {string} button should be visible', async ({ page }, buttonName: string) => {
  const btn = page.getByRole('button', { name: buttonName });
  await expect(btn).toBeVisible();
});
