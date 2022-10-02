import { expect, test } from 'tests/setup';
import { routeHrefs } from '~/constants';
import { getPageTitle } from '~/utils/meta-utils';

test.describe('About Me -> Experience page should', () => {
  test('have a valid visual', async ({ page }) => {
    await page.goto(routeHrefs.aboutMe.experience);

    const title = await page.title();
    expect(title).toBe(getPageTitle('Experience'));

    await expect(page).toHaveScreenshot('final.png');
  });
});
