import { expect, test } from 'tests/setup';
import { routeHrefs } from '~/constants';
import { getPageTitle } from '~/utils/meta-utils';

test.describe('Home page should', () => {
  test('have a valid visual', async ({ page }) => {
    await page.goto(routeHrefs.home);

    const title = await page.title();
    expect(title).toBe(getPageTitle(''));

    await expect(page).toHaveScreenshot('final.png');
  });
});
