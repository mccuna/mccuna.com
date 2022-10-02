import { expect, test } from 'tests/setup';
import { routeHrefs } from '~/constants';
import { getPageTitle } from '~/utils/meta-utils';

test.describe('About Me -> My Journey page should', () => {
  test('have a valid visual', async ({ page }) => {
    await page.goto(routeHrefs.aboutMe.myJourney);

    const title = await page.title();
    expect(title).toBe(getPageTitle('My journey'));

    await expect(page).toHaveScreenshot('final.png');
  });
});
