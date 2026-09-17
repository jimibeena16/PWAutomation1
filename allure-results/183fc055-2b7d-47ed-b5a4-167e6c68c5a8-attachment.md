# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dynamicelement.spec.ts >> title3
- Location: tests\dynamicelement.spec.ts:21:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#visibleAfter')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#visibleAfter') with timeout 10000ms
  - waiting for locator('#visibleAfter')
  - Test timeout of 3000ms exceeded.

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
  13 |     await page.goto('https://demoqa.com/dynamic-properties');
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
> 24 | await expect(visibleAfterButton).toBeVisible({ timeout: 10000 });
     |                                  ^ Error: expect(locator).toBeVisible() failed
  25 | await visibleAfterButton.click();
  26 | });
  27 | 
  28 | 
  29 | 
```