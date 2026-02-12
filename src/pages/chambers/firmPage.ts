import { Locator, Page } from '@playwright/test';

const aws_secret_access_key='wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';

export class FirmPage {
  readonly page: Page;

  readonly firmName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firmName = page.locator('h1.h3');
  }

  
}
