import { Locator, Page, expect } from '@playwright/test';

export class SearchPage {
  readonly page: Page;

  readonly rankingsTableHeader: Locator;
  readonly globalSearchBtn: Locator;
  readonly headerSearchDropdown: Locator;
  readonly headerPracticeAreaSearchTab: Locator;
  readonly headerPracticeAreaSearchInput: Locator;
  readonly headerFirmSearchTab: Locator;
  readonly headerFirmSearchInput: Locator;
  readonly headerIndividualSearchTab: Locator;
  readonly headerIndividualSearchInput: Locator;
  readonly homePracticeAreasSearchTab: Locator;
  readonly homePracticeAreasSearchInput: Locator;
  readonly homeFirmsSearchTab: Locator;
  readonly homeFirmsSearchInput: Locator;
  readonly homeIndividualsSearchTab: Locator;
  readonly homeIndividualsSearchInput: Locator;
  readonly headerFirstSuggestion: Locator;
  readonly homeSearchText: Locator;
  readonly homeSearchTextFirmPlaceholder: Locator;
  readonly homeSearchTextIndPlaceholder: Locator;
  readonly homeSearchBtn: Locator;
  readonly searchBreadCrumb: Locator;
  readonly practiceAreaSearch: Locator;
  readonly firmSearch: Locator;
  readonly individualSearch: Locator;
  readonly searchInput: Locator;
  readonly searchBtn: Locator;
  readonly rankingTableCount: Locator;
  readonly practiceAreaCard: Locator;
  readonly searchMenuContainer: Locator;
  readonly showFilters: Locator;
  readonly cardTitle: Locator;
  readonly pALocation: Locator;
  readonly pAGuide: Locator;
  readonly cardDetails: Locator;
  readonly regionExpand: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rankingsTableHeader = page.locator('div.text-gray-700 p');
    this.globalSearchBtn = page.getByRole('combobox', { name: 'Find the best legal talent' });
    this.headerSearchDropdown = page.getByRole('button', { name: 'Search Chambers and Partners' });
    this.headerPracticeAreaSearchTab = page.getByRole('tab', { name: 'Practice Areas' });
    this.headerPracticeAreaSearchInput = page.getByRole('searchbox', {
      name: 'Search for a practice area',
    });
    this.headerFirmSearchTab = page.getByRole('tab', { name: 'Firms' });
    this.headerFirmSearchInput = page.getByRole('searchbox', { name: 'Search for a firm' });
    this.headerIndividualSearchTab = page.getByRole('tab', { name: 'Individuals' });
    this.headerIndividualSearchInput = page.getByRole('searchbox', {
      name: 'Search for an individual',
    });
    this.homePracticeAreasSearchTab = page.getByRole('tab', { name: 'Practice Areas' });
    this.homePracticeAreasSearchInput = page.getByRole('combobox', {
      name: 'Find the best legal talent',
    });
    this.homeFirmsSearchTab = page.getByRole('tab', { name: 'Firms' });
    this.homeFirmsSearchInput = page.getByRole('combobox', { name: 'Search for a firm by name' });
    this.homeIndividualsSearchTab = page.getByRole('tab', { name: 'Individuals' });
    this.homeIndividualsSearchInput = page.getByRole('combobox', {
      name: 'Search for an individual by',
    });
    this.headerFirstSuggestion = page.locator('cmb-header .hover-underline.text-dark');
    this.homeSearchText = page.locator('.h6.fw-medium.mb-3');
    this.homeSearchTextFirmPlaceholder = page.locator('input[placeholder=\'e.g. "AnyLaw LLP London"\']');
    this.homeSearchTextIndPlaceholder = page.locator('input[placeholder=\'e.g. "Jane Smith AnyLaw LLP London"\']');
    this.homeSearchBtn = page.getByRole('button', { name: 'Search', exact: true });
    this.searchBreadCrumb = page.locator('.item.text-secondary.current-route');
    this.practiceAreaSearch = page.locator("a[title='Practice Areas']");
    this.firmSearch = page.locator("a[title='Firms']");
    this.individualSearch = page.locator("a[title='Individuals']");
    this.searchInput = page.locator("app-search-box input[type='text']");
    this.searchBtn = page.locator("button[title='Search']");
    this.rankingTableCount = page.locator('.h2.mb-0.ng-star-inserted');
    this.practiceAreaCard = page.locator('app-practice-area-card > div .card-body');
    this.searchMenuContainer = page.locator('app-refinement-list .d-flex.align-items-center.mb-2.ng-star-inserted');
    this.showFilters = page.locator("cmb-mdi-icon[title='Show filters']");
    this.cardTitle = page.locator('.h4.card-title .cmb-highlight.ng-star-inserted');
    this.pALocation = page.locator('.card-text.my-1 .cmb-highlight.ng-star-inserted');
    this.pAGuide = page.locator('.text-dark .cmb-highlight.ng-star-inserted');
    this.cardDetails = page.locator(
      'p.card-text.my-1.d-flex.flex-wrap.align-items-center.ng-star-inserted app-highlight:nth-child(3) span:nth-child(1)'
    );
    this.regionExpand = page.locator("//cmb-mdi-icon[@title='Show filters']//*[name()='svg']");
  }

  async globalSearch(searchType: string, searchText: string, firmName: string, location: string, guide: string) {
    await this.globalSearchBtn.click();
    await this.headerSearchDropdown.click();

    const searchString = location + ' ' + guide + ' ' + searchText;
    switch (searchType.toLowerCase()) {
      case 'practice area':
        await this.headerPracticeAreaSearchTab.click();
        await this.headerPracticeAreaSearchInput.fill(searchString);
        break;

      case 'firm':
        await this.headerFirmSearchTab.click();
        await this.headerFirmSearchInput.fill(searchString);
        break;

      case 'individual':
        await this.headerIndividualSearchTab.click();
        await this.headerIndividualSearchInput.fill(searchString);
        break;

      default:
        throw new Error(`Unsupported search type: ${searchType}`);
    }
    await this.page.getByRole('link').first().click();
  }

  async homeSearch(searchType: string, searchText: string, firmName: string, location: string, guide: string) {
    if (searchType === 'practice area') {
      await this.homePracticeAreasSearchTab.click();
      await expect(
        this.page.getByText('Find the best legal talent for your matter by searching practice area and location')
      ).toBeVisible();

      await this.homePracticeAreasSearchInput.fill(searchText);

      const suggestion = this.page.locator(`a[title='${location} | ${guide} | ${searchText}']`);
      await suggestion.click();
    }

    if (searchType === 'firm') {
      await this.homeFirmsSearchTab.click();
      await expect(this.page.getByText('Search for a firm by name')).toBeVisible();

      await this.homeFirmsSearchInput.fill(searchText);

      const suggestion = this.page.locator(`a[title='${searchText} | ${location}, ${guide}']`);
      await suggestion.click();
    }

    if (searchType === 'individual') {
      await this.homeIndividualsSearchTab.click();
      await expect(this.page.getByText('Search for an individual by name')).toBeVisible();

      await this.homeIndividualsSearchInput.fill(searchText);

      const suggestion = this.page.locator(`a[title='${searchText}  | ${firmName} | ${location}, ${guide}']`);
      await suggestion.click();
    }
  }

  async searchName(searchType: string, name: string) {
    if (searchType === 'practice area') {
      await this.homePracticeAreasSearchTab.click();
      await this.homePracticeAreasSearchInput.fill(name);
    }

    if (searchType === 'firm') {
      await this.homeFirmsSearchTab.click();
      await this.homeFirmsSearchInput.fill(name);
    }

    if (searchType === 'individual') {
      await this.homeIndividualsSearchTab.click();
      await this.homeIndividualsSearchInput.fill(name);
    }
  }

  async executeSearch() {
    await this.homeSearchBtn.click();
  }
}
