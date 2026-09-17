# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mouse.spec.ts >> Double Click
- Location: tests\mouse.spec.ts:24:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.dblclick: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#doubleClickBtn')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Mouse Hover', async ({ page }) => {
  4  |     test.setTimeout(10000);
  5  |     await page.goto('https://demoqa.com/tool-tips');
  6  | 
  7  |    // await page.getByRole('button', {name: 'Hover me'}).hover();
  8  |    
  9  |   //  const tooltip = page.getByTestId('tooltip');
  10 |   //  await expect(tooltip).toBeVisible();
  11 |  //   await expect(tooltip).toHaveText('You hovered over the Button');
  12 | 
  13 |     await page.locator('#toolTipButton').hover();
  14 |     await expect(page.locator('.tooltip-inner')).toHaveText('You hovered over the Button');
  15 | 
  16 | });
  17 | 
  18 | test('Right Click', async ({ page }) => {
  19 |     await page.goto('https://demoqa.com/buttons');
  20 |     await page.locator('#rightClickBtn').click({button: 'right'});
  21 |     await expect(page.locator('#rightClickMessage')).toContainText('You have done a right click');
  22 | });
  23 | 
  24 | test('Double Click', async ({ page }) => {
  25 |     await page.goto('https://demoqa.com/buttons');
> 26 |     await page.locator('#doubleClickBtn').dblclick();
     |                                           ^ Error: locator.dblclick: Test timeout of 30000ms exceeded.
  27 |     await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');
  28 | });
  29 | 
```