import { test, expect } from '@playwright/test';

test('should navigate from Services to Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

  // Open the Services header menu.
  await page.getByRole('link', { name: 'Services', exact: true }).click();

  // Navigate to the Client Work page from the Services menu.
  await page
    .getByRole('link', { name: 'Explore Our Client Work', exact: true })
    .click();

  // Confirm that the Client Work page content is displayed.
  await expect(
    page.getByRole('heading', { name: /Client Work/i })
  ).toBeVisible();
});
