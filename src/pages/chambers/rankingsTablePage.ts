import { Locator, Page } from '@playwright/test';

export class RankingsTablePage {
  readonly page: Page;

  readonly rankingsTableHeader: Locator;
  readonly rankingTabsTitle: Locator;
  readonly lawyersTab: Locator;
  readonly locationText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rankingsTableHeader = page.locator('.h2');
    this.rankingTabsTitle = page.locator('#rankings-tabs-title');
    this.lawyersTab = page.locator('#individuals-1-tab');
    this.locationText = page.locator('h2.mb-0');
  }
}
