# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2Edemo.spec.ts >> SauceDemo End to End Flow
- Location: tests\E2Edemo.spec.ts:3:5

# Error details

```
Test timeout of 10000ms exceeded.
```

```
Error: page.goto: Test timeout of 10000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('SauceDemo End to End Flow', async ({ page }) => {
  4  |   test.setTimeout(10000);
  5  |   // Open application
> 6  |   await page.goto('https://www.saucedemo.com/');
     |              ^ Error: page.goto: Test timeout of 10000ms exceeded.
  7  | 
  8  |   // Login
  9  |   await page.locator('#user-name').fill('standard_user');
  10 |   await page.locator('#password').fill('secret_sauce');
  11 |   await page.locator('#login-button').click();
  12 | 
  13 |   // Verify Products page
  14 |   await expect(page.locator('.title')).toHaveText('Products');
  15 | 
  16 |   // Add product
  17 |   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  18 | 
  19 |   // Open cart
  20 |   await page.locator('.shopping_cart_link').click();
  21 | 
  22 |   // Verify cart
  23 |   await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  24 | 
  25 |   // Checkout
  26 |   await page.locator('#checkout').click();
  27 | 
  28 |   // Enter customer details
  29 |   await page.locator('#first-name').fill('John');
  30 |   await page.locator('#last-name').fill('Doe');
  31 |   await page.locator('#postal-code').fill('695001');
  32 | 
  33 |   await page.locator('#continue').click();
  34 | 
  35 |   // Verify checkout overview
  36 |   await expect(page.locator('.title')).toHaveText('Checkout: Overview');
  37 | 
  38 |   // Finish order
  39 |   await page.locator('#finish').click();
  40 | 
  41 |   // Verify order completion
  42 |   await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  43 | });
  44 | 
  45 | 
```