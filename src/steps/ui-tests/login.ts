import { expect, Given, Then, When } from '../../fixtures/fixtures';

Given('I navigate to shady meadows admin page', async ({ page, homepage }) => {
  await page.goto('https://automationintesting.online/');
  await homepage.adminLink.click();
});

When('I login with valid credentials', async ({ adminLoginPage }) => {
  await adminLoginPage.loginToAdminDashboard('admin', 'password');
});

Then('I should see the admin dashboard', async ({ adminDashboardPage }) => {
  await expect(adminDashboardPage.pageTitle).toBeVisible();
});
