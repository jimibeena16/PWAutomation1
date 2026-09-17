# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> SauceDemo Login Test
- Location: tests\login.spec.ts:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/inventory.html"
Received: "https://www.saucedemo.com/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username": standard_user1
    - textbox "Password": secret_sauce
    - alert:
      - button "Dismiss error"
      - text: "Epic sadface: Username and password do not match any user in this service"
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('SauceDemo Login Test', async ({ page }) => {
  4  |   // Navigate to SauceDemo
  5  |   await page.goto('https://www.saucedemo.com/');
  6  | 
  7  |   // Enter username and password
  8  |   await page.locator('[data-test="username"]').fill('standard_user1');
  9  |   await page.locator('[data-test="password"]').fill('secret_sauce');
  10 | 
  11 |   // Click Login button
  12 |   await page.locator('[data-test="login-button"]').click();
  13 | 
  14 |   // Verify successful login
> 15 |    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
     |                       ^ Error: expect(page).toHaveURL(expected) failed
  16 |   await expect(page.locator('.title')).toHaveText('Products');
  17 | });
```