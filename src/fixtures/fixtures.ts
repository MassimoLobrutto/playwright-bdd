/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { test as base, createBdd } from 'playwright-bdd';
import { SearchPage } from '../pages/ui-tests/searchPage';
import { RankingsTablePage } from '../pages/ui-tests/rankingsTablePage';
import { LawyerPage } from '../pages/ui-tests/lawyerPage';
import { FirmPage } from '../pages/ui-tests/firmPage';
import { LoginPage } from '../pages/stored-auth-tests/login-page';
import { Page } from '@playwright/test';

interface Fixtures {
  searchPage: SearchPage;
  firmPage: FirmPage;
  lawyerPage: LawyerPage;
  rankingsTablePage: RankingsTablePage;
  loginPage: LoginPage;
  page: Page;
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
    loginPage: async ({ page }, use) => {
      await use(new LoginPage(page));
    },
  };
}

type ApiFixtures = {
  apiResponse: {
    last: any;
  };
};

type CombinedFixtures = Fixtures & ApiFixtures;

export const test = base.extend<CombinedFixtures>({
  // Spread the existing page file fixtures
  ...getPageFiles(),

  // Add the new apiResponse fixture
  apiResponse: async ({}, use) => {
    await use({ last: null });
  },
});

export const { Given, When, Then } = createBdd(test);

export { expect, Page } from '@playwright/test';
