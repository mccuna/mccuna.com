import { expect, test } from 'tests/setup';
import { getScreenshotName } from 'tests/utils/misc';
import { routeHrefs } from '~/constants';
import { getPageTitle } from '~/utils/meta-utils';

test.describe('Error page should', () => {
  test('be displayed and have valid visual when an error occurs', async ({
    page,
  }, testInfo) => {
    await page.goto(routeHrefs.devOnly.trigger500Error);

    const title = await page.title();
    expect(title).toBe(getPageTitle(''));

    await expect(page).toHaveScreenshot(
      getScreenshotName({ testInfo, name: 'valid-visual' }),
    );
  });
});
