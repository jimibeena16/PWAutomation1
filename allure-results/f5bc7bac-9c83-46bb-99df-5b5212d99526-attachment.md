# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: window.spec.ts >> Handle new window
- Location: tests\window.spec.ts:21:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: page.goto: Test timeout of 3000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/browser-windows", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test('Handling a new tab on DemoQA', async ({ context, page }) => {
  4  |  
  5  |   await page.goto('https://demoqa.com/browser-windows');
  6  | 
  7  |     const [newTab] = await Promise.all([
  8  |     context.waitForEvent('page'), 
  9  |     page.click('#tabButton') 
  10 |   ]);
  11 | 
  12 |    await newTab.waitForLoadState(); 
  13 | 
  14 |    const headingText = await newTab.locator('#sampleHeading').textContent();
  15 |   expect(headingText).toContain('This is a sample page');
  16 | 
  17 |     await expect(page.locator('#tabButton')).toBeVisible();
  18 | });
  19 | 
  20 | //new window
  21 | test('Handle new window', async ({ page }) => {
> 22 |   await page.goto('https://demoqa.com/browser-windows');
     |              ^ Error: page.goto: Test timeout of 3000ms exceeded.
  23 | 
  24 |   const [windowPage] = await Promise.all([
  25 |     page.context().waitForEvent('page'),
  26 |     page.click('#windowButton')
  27 |   ]);
  28 | 
  29 |   await windowPage.waitForLoadState();
  30 | 
  31 |   console.log(await windowPage.url());
  32 | });
  33 | 
  34 | 
  35 | 
```