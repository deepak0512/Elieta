import { test, expect } from '@playwright/test';

test('should navigate from Services to Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

  // Test steps and assertions are added below.
});
