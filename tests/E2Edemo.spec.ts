import { test, expect } from '@playwright/test';

test('SauceDemo End to End Flow', async ({ page }) => {
  // Open application
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Verify Products page
  await expect(page.locator('.title')).toHaveText('Products');

  // Add product
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Open cart
  await page.locator('.shopping_cart_link').click();

  // Verify cart
  await expect(page.locator('.inventory_item_name').first()).toHaveText('Sauce Labs Backpack');

  // Checkout
  await page.locator('#checkout').click();

  // Enter customer details
  await page.locator('#first-name').fill('John');
  await page.locator('#last-name').fill('Doe');
  await page.locator('#postal-code').fill('695001');

  await page.locator('#continue').click();

  // Verify checkout overview
  await expect(page.locator('.title')).toHaveText('Checkout: Overview');

  // Finish order
  await page.locator('#finish').click();

  // Verify order completion
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});

