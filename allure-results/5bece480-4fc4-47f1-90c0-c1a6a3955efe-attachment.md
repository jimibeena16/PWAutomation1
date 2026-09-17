# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mouse.spec.ts >> Right Click
- Location: tests\mouse.spec.ts:14:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: locator.click: Test timeout of 3000ms exceeded.
Call log:
  - waiting for locator('#rightClickBtn')
    - locator resolved to <button type="button" id="rightClickBtn" class="btn btn-primary">Right Click Me</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13] [cursor=pointer]: Elements
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
      - generic [ref=e62]: Forms
      - generic [ref=e75]: Alerts, Frame & Windows
      - generic [ref=e87]: Widgets
      - generic [ref=e100]: Interactions
      - generic [ref=e112]: Book Store Application
    - generic [ref=e125]:
      - heading "Buttons" [level=1] [ref=e126]
      - button "Double Click Me" [ref=e128] [cursor=pointer]
      - button "Right Click Me" [ref=e130] [cursor=pointer]
      - button "Click Me" [ref=e132] [cursor=pointer]
  - contentinfo [ref=e139]:
    - generic [ref=e140]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Mouse Hover', async ({ page }) => {
  4  |     await page.goto('https://demoqa.com/tool-tips');
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
> 16 |     await page.locator('#rightClickBtn').click({button: 'right'});
     |                                          ^ Error: locator.click: Test timeout of 3000ms exceeded.
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