# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login_screenshot.spec.ts >> SauceDemo Login Test - valid login
- Location: tests\login_screenshot.spec.ts:3:5

# Error details

```
TimeoutError: page.goto: Timeout 10000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('SauceDemo Login Test - valid login', async ({ page }) => {
  4  |   // Navigate to SauceDemo
> 5  |   await page.goto('https://www.saucedemo.com/');
     |              ^ TimeoutError: page.goto: Timeout 10000ms exceeded.
  6  | 
  7  |   // Enter username and password
  8  |   await page.locator('[data-test="username"]').fill('standard_user');
  9  |   await page.locator('[data-test="password"]').fill('secret_sauce');
  10 | 
  11 |   // Click Login button
  12 |   await page.locator('[data-test="login-button"]').click();
  13 |    await page.screenshot({path: 'screenshots/title1.png'});
  14 | 
  15 |   // Verify successful login
  16 |    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  17 |   await expect(page.locator('.title')).toHaveText('Products');
  18 | });
  19 | 
  20 | //special locator - filter
  21 | //Add "Sauce Labs Backpack" to the cart without using nth().
  22 | 
  23 | test('Add specific product', async ({ page }) => {
  24 | 
  25 |   await page.goto('https://www.saucedemo.com/');
  26 |   await page.getByPlaceholder('Username').fill('standard_user');
  27 |   await page.getByPlaceholder('Password').fill('secret_sauce');
  28 |   await page.getByRole('button', { name: 'Login' }).click();
  29 | 
  30 |   const product = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' });
  31 | 
  32 |   await product.getByRole('button', { name: 'Add to cart' }).click();
  33 |   await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  34 | });
  35 | 
  36 | test('SauceDemo Login Test - Invalid login', async ({ page }) => {
  37 |   // Navigate to SauceDemo
  38 |   await page.goto('https://www.saucedemo.com/');
  39 | 
  40 |   // Enter username and password
  41 |   await page.locator('[data-test="username"]').fill('standard_user');
  42 |   await page.locator('[data-test="password"]').fill('secret_sauce');
  43 | 
  44 |   // Click Login button
  45 |   await page.locator('[data-test="login-button"]').click();
  46 |    await page.screenshot({path: 'screenshots/title1.png'});
  47 | 
  48 |   // Verify successful login
  49 |    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  50 |   await expect(page.locator('.title')).toHaveText('Products');
  51 | });
  52 | 
```