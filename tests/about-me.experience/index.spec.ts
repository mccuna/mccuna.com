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
      getScreenshotName({ testInfo, name: 'final.png' }),
    );
  });
});
