import { test as base, createBdd } from 'playwright-bdd';
import { SearchPage } from '../pages/chambers/searchPage';
import { RankingsTablePage } from '../pages/chambers/rankingsTablePage';
import { LawyerPage } from '../pages/chambers/lawyerPage';
import { FirmPage } from '../pages/chambers/firmPage';

interface Fixtures {
  searchPage: SearchPage;
  firmPage: FirmPage;
  lawyerPage: LawyerPage;
  rankingsTablePage: RankingsTablePage;
}

function getPageFiles() {
  return {
    searchPage: async ({ page }, use) => {
      await use(new SearchPage(page));
    },
    rankingsTablePage: async ({ page }, use) => {
      await use(new RankingsTablePage(page));
    },
    firmPage: async ({ page }, use) => {
      await use(new FirmPage(page));
    },
    lawyerPage: async ({ page }, use) => {
      await use(new LawyerPage(page));
    },
  };
}

export const test = base.extend<Fixtures>(getPageFiles());

export const { Given, When, Then } = createBdd(test);

export { expect, Page } from '@playwright/test';
