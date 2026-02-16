import { expect, Given, Then, When } from '../../fixtures/fixtures';

Given('I navigate to Chambers new homepage', async ({ page }) => {
  await page.goto('https://www.chambers.com');
  await page.getByRole('button', { name: 'Accept All' }).click();
});

When(
  'I search on global header with {string}, {string}, {string}, {string} and {string}',
  async ({ searchPage }, searchType: string, searchText: string, firmName: string, location: string, guide: string) => {
    await searchPage.globalSearch(searchType, searchText, firmName, location, guide);
  }
);

When(
  'I can see user landed on rankings table for practiceArea {string}, {string}, {string}',
  async ({ rankingsTablePage, page }, practiceArea: string, guide: string, location: string) => {
    await expect(rankingsTablePage.rankingsTableHeader).toContainText('Ranking tables');
    await expect(page.getByRole('link', { name: practiceArea }).first()).toBeVisible();
    await expect(rankingsTablePage.locationText).toHaveText(location);
  }
);

Then('I am navigated to {string} {string} page', async ({ firmPage, lawyerPage }, type: string, name: string) => {
  switch (type) {
    case 'firm':
      await expect(firmPage.firmName).toContainText(name);
      await expect(firmPage.page).toHaveTitle(new RegExp(name, 'i'));
      break;
    case 'individual':
      await expect(lawyerPage.page.getByText('Lawyer profile')).toBeVisible();
      await expect(lawyerPage.lawyerName).toContainText(name);
      break;
  }
});

When(
  'I search on home page with {string}, {string}, {string}, {string} and {string}',
  async ({ searchPage }, searchType, name, firmName, location, guide) => {
    await searchPage.homeSearch(searchType, name, firmName, location, guide);
  }
);

When('I enter {string} {string} in search on home page', async ({ searchPage }, searchType, name) => {
  await searchPage.searchName(searchType, name);
});

When('I click on Search', async ({ searchPage }) => {
  await searchPage.executeSearch();
});
