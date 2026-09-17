import { test, expect } from '@playwright/test';

test('SauceDemo Login Test - valid login', async ({ page }) => {
  // Navigate to SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Enter username and password
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click Login button
  await page.locator('[data-test="login-button"]').click();
   await page.screenshot({path: 'screenshots/title1.png'});

  // Verify successful login
   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(page.locator('.title')).toHaveText('Products');
});

//special locator - filter
//Add "Sauce Labs Backpack" to the cart without using nth().

test('Add specific product', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  const product = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' });

  await product.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('SauceDemo Login Test - Invalid login', async ({ page }) => {
  // Navigate to SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Enter username and password
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click Login button
  await page.locator('[data-test="login-button"]').click();
   await page.screenshot({path: 'screenshots/title1.png'});

  // Verify successful login
   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(page.locator('.title')).toHaveText('Products');
});
