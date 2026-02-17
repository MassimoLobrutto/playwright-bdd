import { chromium } from '@playwright/test';
import { logger } from '../helper/logger/logger';
import path from 'node:path';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const authFile = 'playwright/.auth/user.json';

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Assert successful login
  await page.waitForURL('**/inventory.html');
  await page.locator('.inventory_list').waitFor();
  await page.context().storageState({ path: authFile });
  logger.log('Saving state to:', path.resolve('playwright/.auth/user.json'));
  await browser.close();
}

export default globalSetup;
