import { expect, test } from 'tests/setup';
import { routeHrefs } from '~/constants';
import { getPageTitle } from '~/utils/meta-utils';

test.describe('About Me -> Skills page should', () => {
  test('have a valid visual', async ({ page }) => {
    await page.goto(routeHrefs.aboutMe.skills);

    const title = await page.title();
    expect(title).toBe(getPageTitle('Skills'));

    await expect(page).toHaveScreenshot('final.png');
  });
});
