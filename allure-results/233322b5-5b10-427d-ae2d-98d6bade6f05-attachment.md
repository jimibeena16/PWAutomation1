# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mous.spec.ts >> Mouse Hover
- Location: tests\mous.spec.ts:10:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/tool-tips", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e7]:
    - generic [ref=e8]:
      - link "Selenium Online Training":
        - /url: https://www.toolsqa.com/selenium-training/
        - img "Selenium Online Training"
    - generic [ref=e10]:
      - link [ref=e11] [cursor=pointer]:
        - /url: /elements
        - heading "Elements" [level=5] [ref=e19]
      - link [ref=e20] [cursor=pointer]:
        - /url: /forms
        - heading "Forms" [level=5] [ref=e29]
      - link [ref=e30] [cursor=pointer]:
        - /url: /alertsWindows
        - heading "Alerts, Frame & Windows" [level=5] [ref=e38]
      - link [ref=e39] [cursor=pointer]:
        - /url: /widgets
        - heading "Widgets" [level=5] [ref=e48]
      - link [ref=e49] [cursor=pointer]:
        - /url: /interaction
        - heading "Interactions" [level=5] [ref=e57]
      - link [ref=e58] [cursor=pointer]:
        - /url: /books
        - heading "Book Store Application" [level=5] [ref=e66]
  - contentinfo [ref=e67]:
    - generic [ref=e68]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | const BASE_URL = 'https://demoqa.com';
  4  | 
  5  | test.beforeEach(async ({ page }) => {
  6  |   console.log('Opening browser and navigating');
  7  |   await page.goto(BASE_URL);
  8  | }); 
  9  | 
  10 | test('Mouse Hover', async ({ page }) => {
> 11 |     await page.goto('/tool-tips');
     |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  12 |     await page.pause()
  13 |     await page.locator('#toolTipButton').hover();
  14 |     const tooltip = page.locator('[role="tooltip"]');
  15 | 
  16 |     await expect(tooltip).toBeVisible();
  17 |     await expect(tooltip).toContainText('You hovered over the Button');
  18 | });
```