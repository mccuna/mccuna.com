import { expect, test } from 'tests/setup';
import { getScreenshotName } from 'tests/utils/misc';
import { routeHrefs } from '~/constants';
import { getPageTitle } from '~/utils/meta-utils';

test.describe('About Me -> Experience page should', () => {
  test('have a valid visual', async ({ page }, testInfo) => {
    await page.goto(routeHrefs.aboutMe.experience);

    const title = await page.title();
    expect(title).toBe(getPageTitle('Experience'));

    await expect(page).toHaveScreenshot(
      getScreenshotName({ testInfo, name: 'final' }),
    );
  });

  test('toggle experience card visibility', async ({ page }, testInfo) => {
    await page.goto(routeHrefs.aboutMe.experience);

    await page
      .getByTestId('1-summary')
      .getByRole('button', {
        name: 'Expand',
      })
      .click();

    await expect(page).toHaveScreenshot(
      getScreenshotName({ testInfo, name: '1-expanded' }),
    );

    await page
      .getByTestId('1-summary')
      .getByRole('button', {
        name: 'Collapse',
      })
      .click();

    await expect(page).toHaveScreenshot(
      getScreenshotName({ testInfo, name: '1-collapsed' }),
    );

    await page
      .getByTestId('1-summary')
      .getByRole('button', {
        name: 'Expand',
      })
      .click();

    await page
      .getByTestId('2-summary')
      .getByRole('button', {
        name: 'Expand',
      })
      .click();

    await expect(page).toHaveScreenshot(
      getScreenshotName({ testInfo, name: '2-2-expanded' }),
    );

    await page
      .getByTestId('2-summary')
      .getByRole('button', {
        name: 'Collapse',
      })
      .click();

    await expect(page).toHaveScreenshot(
      getScreenshotName({ testInfo, name: '2-1-expanded' }),
    );
  });
});
