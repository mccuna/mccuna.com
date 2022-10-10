import { expect, test } from 'tests/setup';
import { getScreenshotName } from 'tests/utils/misc';
import { routeHrefs } from '~/constants';
import { getPageTitle } from '~/utils/meta-utils';

test.describe('About Me -> My Journey page should', () => {
  test('have a valid visual', async ({ page }, testInfo) => {
    await page.goto(routeHrefs.aboutMe.myJourney);

    const title = await page.title();
    expect(title).toBe(getPageTitle('My journey'));

    await expect(page).toHaveScreenshot(
      getScreenshotName({ testInfo, name: 'final' }),
    );
  });
});
