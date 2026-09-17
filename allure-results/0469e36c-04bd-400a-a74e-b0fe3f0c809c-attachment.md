# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mouse.spec.ts >> Mouse Hover
- Location: tests\mouse.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/tool-tips", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Mouse Hover', async ({ page }) => {
> 4  |     await page.goto('https://demoqa.com/tool-tips');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  | 
  6  |     const button = page.getByRole('button', {name: 'Hover me'});
  7  |     await button.hover();
  8  | 
  9  |     const tooltip = page.getByTestId('tooltip');
  10 |     await expect(tooltip).toBeVisible();
  11 |     await expect(tooltip).toHaveText('You hovered over the Button');
  12 | });
  13 | 
  14 | test('Right Click', async ({ page }) => {
  15 |     await page.goto('https://demoqa.com/buttons');
  16 |     await page.locator('#rightClickBtn').click({button: 'right'});
  17 |     await expect(page.locator('#rightClickMessage')).toContainText('You have done a right click');
  18 | });
  19 | 
  20 | test('Double Click', async ({ page }) => {
  21 |     await page.goto('https://demoqa.com/buttons');
  22 |     await page.locator('#doubleClickBtn').dblclick();
  23 |     await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');
  24 | });
  25 | 
```