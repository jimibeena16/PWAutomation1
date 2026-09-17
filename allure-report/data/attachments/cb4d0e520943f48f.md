# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo3.spec.ts >> title3
- Location: tests\demo3.spec.ts:23:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#visibleAfter')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#visibleAfter') with timeout 10000ms
  - waiting for locator('#visibleAfter')
  - Test timeout of 30000ms exceeded.

```

```yaml
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- list:
  - listitem:
    - link "Text Box":
      - /url: /text-box
      - img
      - text: Text Box
  - listitem:
    - link "Check Box":
      - /url: /checkbox
      - img
      - text: Check Box
  - listitem:
    - link "Radio Button":
      - /url: /radio-button
      - img
      - text: Radio Button
  - listitem:
    - link "Web Tables":
      - /url: /webtables
      - img
      - text: Web Tables
  - listitem:
    - link "Buttons":
      - /url: /buttons
      - img
      - text: Buttons
  - listitem:
    - link "Links":
      - /url: /links
      - img
      - text: Links
  - listitem:
    - link "Broken Links - Images":
      - /url: /broken
      - img
      - text: Broken Links - Images
  - listitem:
    - link "Upload and Download":
      - /url: /upload-download
      - img
      - text: Upload and Download
  - listitem:
    - link "Dynamic Properties":
      - /url: /dynamic-properties
      - img
      - text: Dynamic Properties
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- heading "Dynamic Properties" [level=1]
- paragraph: This text has random Id
- button "Will enable 5 seconds" [disabled]
- button "Color Change"
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | //1.element with changing ID's
  5  | test('title1', async ({ page }) => {
  6  | await page.goto('https://demoqa.com/dynamic-properties');
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
> 27 | await expect(visibleAfterButton).toBeVisible({ timeout: 10000 });
     |                                  ^ Error: expect(locator).toBeVisible() failed
  28 | await visibleAfterButton.click();
  29 | });
  30 | 
  31 | 
```