# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dynamicelement.spec.ts >> title2
- Location: tests\dynamicelement.spec.ts:12:5

# Error details

```
TimeoutError: page.goto: Timeout 10000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/dynamic-properties", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | //1.element with changing ID's
  4  | test('title1', async ({ page }) => {
  5  | await page.goto('https://demoqa.com/dynamic-properties');
  6  | test.setTimeout(40000)
  7  | const dynamicText = page.getByText('This text has random Id');
  8  | await expect(dynamicText).toBeVisible();
  9  | });
  10 | 
  11 | //2. elements enable after a delay 
  12 | test('title2', async ({ page }) => {
> 13 |     await page.goto('https://demoqa.com/dynamic-properties');
     |                ^ TimeoutError: page.goto: Timeout 10000ms exceeded.
  14 | const enableAfterButton = page.locator('#enableAfter');
  15 | await expect(enableAfterButton).toBeEnabled({ timeout: 10000 });
  16 | await enableAfterButton.click();
  17 | });
  18 | 
  19 | //3. Elements That Appear After a Delay (Hidden to Visible)
  20 | 
  21 | test('title3', async ({ page }) => {
  22 |     await page.goto('https://demoqa.com/dynamic-properties');
  23 | const visibleAfterButton = page.locator("#visibleAfter");
  24 | await expect(visibleAfterButton).toBeVisible({ timeout: 10000 });
  25 | await visibleAfterButton.click();
  26 | });
  27 | 
  28 | 
  29 | 
```