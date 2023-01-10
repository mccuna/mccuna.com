import { expect, test } from 'tests/setup';
import { getScreenshotName } from 'tests/utils/misc';
import { routeHrefs } from '~/constants';
import { getPageTitle } from '~/utils/meta-utils';

test.describe('About Me -> Skills page should', () => {
  test('have a valid visual', async ({ page }, testInfo) => {
    await page.goto(routeHrefs.aboutMe.skills);

    const title = await page.title();
    expect(title).toBe(getPageTitle('Skills'));

    // Wait for the progress bar animation to finish
    page.waitForTimeout(1000);

    await expect(page).toHaveScreenshot(
      getScreenshotName({ testInfo, name: 'final' }),
    );
  });
});
