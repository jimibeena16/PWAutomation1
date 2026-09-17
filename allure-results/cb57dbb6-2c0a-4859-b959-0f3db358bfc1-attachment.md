# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: key.spec.ts >> Drag And Drop
- Location: tests\key.spec.ts:22:6

# Error details

```
Error: locator.dragTo: Target page, context or browser has been closed
Call log:
  - waiting for locator('#source-item')

```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test('Keyboard Actions', async ({ page }) => {
  4  |     await page.goto('https://demoqa.com/text-box');
  5  | 
  6  |     await page.locator('#userName').fill('Playwright');
  7  | 
  8  |     await page.keyboard.press('Tab');
  9  | 
  10 |     await page.keyboard.insertText('playwright@test.com');
  11 | 
  12 |     await page.keyboard.press('Control+A');
  13 |     await page.keyboard.press('Control+C');
  14 | 
  15 |     await page.keyboard.press('Tab');
  16 |     await page.keyboard.press('Tab');
  17 |     
  18 |     await page.keyboard.press('Control+V');
  19 | });
  20 | 
  21 | //drag & drop 
  22 | test.only('Drag And Drop', async ({ page }) => {
  23 |    // await page.goto('https://demoqa.com/droppable');
  24 |     await page.goto('https://qaplayground.com/apps/drag-drop/');
  25 | 
  26 |     const source = page.locator('#source-item');
  27 |     const target = page.locator('#target-container');
  28 | 
> 29 |     await source.dragTo(target);
     |                  ^ Error: locator.dragTo: Target page, context or browser has been closed
  30 | 
  31 |     await expect(target).toContainText('Dropped!');
  32 | });
  33 | ``
```