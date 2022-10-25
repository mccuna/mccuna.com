import { expect, test } from 'tests/setup';
import { getScreenshotName } from 'tests/utils/misc';
import { getPageTitle } from '~/utils/meta-utils';

test.describe('404  page should', () => {
  test('be displayed and have valid visual when no resource is found at a given route', async ({
    page,
  }, testInfo) => {
    await page.goto('/some-non-existent-route');

    const title = await page.title();
    expect(title).toBe(getPageTitle(''));

    await expect(page).toHaveScreenshot(
      getScreenshotName({ testInfo, name: 'valid-visual' }),
    );
  });
});
