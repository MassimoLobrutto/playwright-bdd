import { CalendarLabel } from '../../pages/ui-tests/home-page';
import { expect, Given, Then, When } from '../../fixtures/fixtures';
import { fakerEN_GB as faker } from '@faker-js/faker';
import { logger } from '../../helper/logger/logger';

Given('I navigate to the homepage', async ({ page, scenarioData }) => {
  await page.goto('https://automationintesting.online/');
  scenarioData.sharingBetweenStepsTest = 'Populated in Given step';
});

When(
  'I search for available rooms from {string} to {string}',
  async ({ homepage }, checkInDate: string, checkOutDate: string) => {
    await homepage.selectDateUK(checkInDate, CalendarLabel.CheckIn);
    await homepage.selectDateUK(checkOutDate, CalendarLabel.CheckOut);
    await homepage.checkAvailabilityButton.click();
  }
);

When(
  'I select {string} room and check that the price per night is {string}',
  async ({ homepage, roomPage }, roomType: string, pricePerNight: string) => {
    await homepage.bookRoomByType(roomType);
    await expect(roomPage.breadcrumb.getByText(roomType)).toBeVisible();
    expect(await roomPage.pageTitle.textContent()).toContain(roomType);
    expect(await roomPage.getPricePerNight()).toBe(Number.parseInt(pricePerNight));
  }
);

When('I check that the total price is {string} and then reserve the room', async ({ roomPage }, arg: string) => {
  expect(await roomPage.getTotalPrice()).toBe(Number.parseInt(arg));
  await roomPage.reserveNowButton.click();
});

When('I fill in the booking form with valid details and submit', async ({ roomPage, scenarioData }) => {
  logger.info(scenarioData.sharingBetweenStepsTest + ' but printed in When step');
  await roomPage.enterReservationDetails(
    faker.person.firstName(),
    faker.person.lastName(),
    faker.internet.email(),
    faker.phone.number()
  );
  await roomPage.reserveNowButton.click();
});

Then('I should see a Booking Confirmed message', async ({ page }) => {
  await expect(page.getByText('Booking Confirmed')).toBeVisible();
});
