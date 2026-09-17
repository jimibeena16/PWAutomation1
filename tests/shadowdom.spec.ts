import {test, expect} from '@playwright/test'

test('Interact with Expand Testing Shadow DOM using user-facing locators', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/shadowdom');
 
  const shadowButton = page.getByRole('button', { name: 'This button is inside a Shadow DOM'});
   await expect(shadowButton).toBeVisible();
 });

//Shadow Host + Child Element
test('Locate element through shadow host', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/shadowdom');

  const shadowHost = page.locator('#shadow-host');
  const button = shadowHost.locator('button');

  await expect(button).toBeVisible();
});
