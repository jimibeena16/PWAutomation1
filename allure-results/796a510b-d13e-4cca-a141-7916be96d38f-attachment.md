# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> should allow adding an item to the cart
- Location: tests\inventory.spec.ts:11:5

# Error details

```
TimeoutError: page.goto: Timeout 10000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test as base } from '@playwright/test';
  2  | 
  3  | type MyFixtures = {
  4  |   inventoryPage: void;
  5  | };
  6  | 
  7  | export const test = base.extend<MyFixtures>({
  8  |   inventoryPage: async ({ page }, use) => {
  9  |     // Setup:
> 10 |     await page.goto('https://www.saucedemo.com/');
     |                ^ TimeoutError: page.goto: Timeout 10000ms exceeded.
  11 |     await page.locator('#user-name').fill('standard_user');
  12 |     await page.locator('#password').fill('secret_sauce');
  13 |     await page.locator('#login-button').click();
  14 | 
  15 |     // Hand over control to the test function
  16 |     await use();
  17 |     
  18 |     //teardown
  19 |   
  20 |   },
  21 | //{auto:true}, //runs automatically in all test, not to give Inventorypage fixture
  22 | });
  23 | export { expect } from '@playwright/test';
```