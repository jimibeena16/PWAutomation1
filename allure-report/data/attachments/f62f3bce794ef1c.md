# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo3.spec.ts >> title1
- Location: tests\demo3.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/dynamic-properties", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | //1.element with changing ID's
  5  | test('title1', async ({ page }) => {
> 6  | await page.goto('https://demoqa.com/dynamic-properties');
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  7  | // Finding the text by its content rather than its random ID
  8  | const dynamicText = page.getByText('This text has random Id');
  9  | await expect(dynamicText).toBeVisible();
  10 | });
  11 | 
  12 | //2. elements enable after a delay 
  13 | test('title2', async ({ page }) => {
  14 |     await page.goto('https://demoqa.com/dynamic-properties');
  15 | // The button is disabled on load and enables after 5 seconds
  16 | const enableAfterButton = page.locator('#enableAfter');
  17 | await expect(enableAfterButton).toBeEnabled({ timeout: 10000 });
  18 | await enableAfterButton.click();
  19 | });
  20 | 
  21 | //3. Elements That Appear After a Delay (Hidden to Visible)
  22 | 
  23 | test('title3', async ({ page }) => {
  24 |     await page.goto('https://demoqa.com/dynamic-properties');
  25 | // The button appears dynamically after 5 seconds
  26 | const visibleAfterButton = page.locator('#visibleAfter');
  27 | await expect(visibleAfterButton).toBeVisible({ timeout: 10000 });
  28 | await visibleAfterButton.click();
  29 | });
  30 | 
  31 | 
```