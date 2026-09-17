import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/user.json'
});

test('view products', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/inventory.html');

  await expect(page.locator('.title')).toHaveText('Products');
});
