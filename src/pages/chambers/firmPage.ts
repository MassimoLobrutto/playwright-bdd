import { Locator, Page } from '@playwright/test';

export class FirmPage {
  readonly page: Page;

  readonly firmName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firmName = page.locator('h1.h3');
  }
}
