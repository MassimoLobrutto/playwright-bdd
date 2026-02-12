import { Locator, Page } from '@playwright/test';

export class LawyerPage {
  readonly page: Page;
  readonly lawyerName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lawyerName = page.locator('h1.h3');
  }
}
