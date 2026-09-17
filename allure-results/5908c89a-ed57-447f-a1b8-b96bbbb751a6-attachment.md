# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mouse.spec.ts >> Double Click
- Location: tests\mouse.spec.ts:29:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "buttons", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e7]:
    - link [ref=e9] [cursor=pointer]:
      - /url: https://www.toolsqa.com/selenium-training/
      - img "Selenium Online Training" [ref=e10]
    - generic [ref=e12]:
      - link [ref=e13] [cursor=pointer]:
        - /url: /elements
        - heading "Elements" [level=5] [ref=e21]
      - link [ref=e22] [cursor=pointer]:
        - /url: /forms
        - heading "Forms" [level=5] [ref=e31]
      - link [ref=e32] [cursor=pointer]:
        - /url: /alertsWindows
        - heading "Alerts, Frame & Windows" [level=5] [ref=e40]
      - link [ref=e41] [cursor=pointer]:
        - /url: /widgets
        - heading "Widgets" [level=5] [ref=e50]
      - link [ref=e51] [cursor=pointer]:
        - /url: /interaction
        - heading "Interactions" [level=5] [ref=e59]
      - link [ref=e60] [cursor=pointer]:
        - /url: /books
        - heading "Book Store Application" [level=5] [ref=e68]
  - contentinfo [ref=e69]:
    - generic [ref=e70]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | /*test.beforeEach(async ({ page }) => {​
  4  | console.log('Opening browser and navigating');
  5  | await page.goto('https://demoqa.com');
  6  | }); */
  7  | 
  8  | test.beforeEach(async ({ page }) => {
  9  |   console.log('Opening browser and navigating');
  10 |   await page.goto('https://demoqa.com/');
  11 | });
  12 | 
  13 | test('Mouse Hover', async ({ page }) => {
  14 |     await page.goto('tool-tips');
  15 |     await page.pause()
  16 |     const tooltip = page.locator('[role="tooltip"]');
  17 | 
  18 |     await expect(tooltip).toBeVisible();
  19 |     await expect(tooltip).toContainText('You hovered over the Button');
  20 | });
  21 | 
  22 | test('Right Click', async ({ page }) => {
  23 |     await page.goto('buttons');
  24 |     await page.locator('#rightClickBtn').click({button: 'right'});
  25 |     await page.pause()
  26 |     await expect(page.locator('#rightClickMessage')).toContainText('You have done a right click');
  27 | });
  28 | 
  29 | test('Double Click', async ({ page }) => {
> 30 |     await page.goto('buttons');
     |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  31 |     await page.locator('#doubleClickBtn').dblclick();
  32 |     await page.pause()
  33 |     await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');
  34 | });
  35 | 
```