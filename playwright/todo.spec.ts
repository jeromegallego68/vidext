import { expect, test } from '@playwright/test';

test('Create a task and see it', async ({ page }) => {
  const text = String(Math.random());
  await page.goto('/todo');

  await page.getByText('Create Task').click();

  await page.fill(`[name=text]`, text);
  await page.click(`form [type=submit]`);

  await expect(page.getByText(text)).toBeVisible();
});