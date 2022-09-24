import fsPromises from 'fs/promises';
import { test } from '../setup';

test.describe('Contact page should', () => {
  test('send an email when data is valid', async ({
    page,
    queries,
    browserName,
  }) => {
    await page.goto('http://localhost:8787/contact');

    const nameInput = await queries.findByRole('textbox', { name: /name/i });
    await nameInput.fill('John Doe');

    const emailInput = await queries.findByRole('textbox', { name: /email/i });
    await emailInput.fill('john_doe@gmail.com');

    const subjectInput = await queries.findByRole('textbox', {
      name: /subject/i,
    });
    await subjectInput.type('Dummy email');

    const messageTextbox = await queries.findByRole('textbox', {
      name: /message/i,
    });
    await messageTextbox.fill(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    );

    await page
      .frameLocator('iframe[data-hcaptcha-response]')
      .locator('#checkbox')
      .click();

    const screenshotBuffer = await page.screenshot({ fullPage: true });

    await fsPromises.writeFile(
      `tests/contact/screenshot_${browserName}.png`,
      screenshotBuffer,
    );

    // cy.findByRole('button', { name: /send message/i }).click();
  });
});
