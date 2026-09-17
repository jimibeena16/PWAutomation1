# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> Basic Drag and Drop using dragTo on DemoQA
- Location: tests\keyboard.spec.ts:18:5

# Error details

```
TimeoutError: page.goto: Timeout 10000ms exceeded.
Call log:
  - navigating to "https://qaplayground.com/practice/drag-drop", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('keyboard actions', async ({ page }) => {
  4  |   await page.goto('https://demoqa.com/text-box');
  5  | 
  6  |   await page.locator('#userName').fill('Playwright');
  7  |   await page.keyboard.press('Tab')
  8  | 
  9  |    await page.keyboard.insertText('playwright@test.com')
  10 |   await page.keyboard.press('Control+A')
  11 |  await page.keyboard.press('Control+C')
  12 |  await page.keyboard.press('Tab')
  13 |  await page.keyboard.press('Tab')
  14 | 
  15 |  await page.keyboard.press('Control+V')
  16 | });
  17 | 
  18 | test('Basic Drag and Drop using dragTo on DemoQA', async ({ page }) => {
> 19 |    await page.goto('https://qaplayground.com/practice/drag-drop');
     |               ^ TimeoutError: page.goto: Timeout 10000ms exceeded.
  20 | 
  21 |     const source = page.getByTestId('dd-item');
  22 |     const target = page.getByTestId('dd-drop-zone');
  23 |     await source.dragTo(target);
  24 | 
  25 |     await expect(target).toContainText('Item dropped');
  26 |    });
```