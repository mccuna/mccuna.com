import { getScreenshotName } from 'tests/utils/misc';
import { routeHrefs } from '~/constants';
import { mailersendApiConfig } from '~/helpers/email/mailersend-constants';
import { getPageTitle } from '~/utils/meta-utils';
import { expect, test } from '../setup';
import { mockDate } from '../utils/mock-date';

test.describe('Contact page should', () => {
  test.beforeEach(async ({ page }) => {
    // mocks Date in the app itself
    await page.addInitScript(mockDate);
  });

  test('have a valid visual', async ({ page }, testInfo) => {
    await page.goto(routeHrefs.contact);

    const title = await page.title();
    expect(title).toBe(getPageTitle('Contact'));

    await expect(page).toHaveScreenshot(
      getScreenshotName({ testInfo, name: 'final.png' }),
    );
  });

  test('send an email when data is valid', async ({
    page,
    mockAgent,
  }, testInfo) => {
    await page.goto(routeHrefs.contact);

    const nameInput = page.getByRole('textbox', { name: /name/i });
    await nameInput.fill('John Doe');

    const emailInput = page.getByRole('textbox', { name: /email/i });
    await emailInput.fill('john_doe@gmail.com');

    const subjectInput = page.getByRole('textbox', {
      name: /subject/i,
    });
    await subjectInput.type('Dummy email');

    const messageTextArea = page.getByRole('textbox', {
      name: /message/i,
    });
    await messageTextArea.fill(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      {},
    );

    const captchaCheckbox = page
      .frameLocator('iframe[data-hcaptcha-response]')
      .locator('div[role="checkbox"]');

    await captchaCheckbox.click({ force: true });
    await expect(captchaCheckbox).toHaveAttribute('aria-checked', 'true');

    const client = mockAgent.get(mailersendApiConfig.baseUrl);

    client
      .intercept({
        method: 'POST',
        path: mailersendApiConfig.endpoints.email,
      })
      .reply(202);

    const sendMsgBtn = page.getByRole('button', {
      name: /send message/i,
    });

    await sendMsgBtn.click();

    const messageSentHeading = page.getByRole('heading', {
      name: /message sent!/i,
    });

    await expect(messageSentHeading).toBeVisible();

    await expect(page).toHaveScreenshot(
      getScreenshotName({ testInfo, name: 'final.png' }),
    );
  });
});
