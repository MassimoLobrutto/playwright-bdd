import { Locator, Page } from '@playwright/test';

export class Homepage {
  readonly page: Page;
  readonly cookieBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookieBtn = page.locator('#onetrust-accept-btn-handler');
  }

  async navigateToHomepage() {
    await this.page.goto('http://www.chambers.com');
    await this.cookieBtn.click();
  }
}
