import { test, expect } from '@playwright/test';
import data from '../utils/credentials.json';

test('Login to SauceDemo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill(data.username);
  await page.locator('#password').fill(data.password);
  await page.locator('#login-button').click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
