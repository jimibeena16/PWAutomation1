# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: radio.spec.ts >> Checkbox Example
- Location: tests\radio.spec.ts:11:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#result')
Expected substring: "Downloads"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" locator('#result') with timeout 5000ms
  - waiting for locator('#result')

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
- heading "Check Box" [level=1]
- textbox "for screen reader"
- tree:
  - treeitem "Select Home Home" [expanded]:
    - checkbox "Select Home"
    - text: Home
  - treeitem "Select Desktop Desktop":
    - checkbox "Select Desktop"
    - text: Desktop
  - treeitem "Select Documents Documents":
    - checkbox "Select Documents"
    - text: Documents
  - treeitem "Select Downloads Downloads":
    - checkbox "Select Downloads"
    - text: Downloads
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | 
  4  | test('Radio Button Example', async ({ page }) => {
  5  |     await page.goto('https://demoqa.com/radio-button');
  6  |     await page.locator('label[for="yesRadio"]').click();
  7  |     await page.pause()
  8  |     await expect(page.locator('.text-success')).toHaveText('Yes');
  9  | });
  10 | 
  11 | test.only('Checkbox Example', async ({ page }) => {
  12 |     test.setTimeout(5000)
  13 |     await page.goto('https://demoqa.com/checkbox');
  14 |     // Expand all
  15 |     await page.locator('.rc-tree-switcher').click();
  16 |     await page.pause()
  17 |     // Select Downloads checkbox
  18 |     await page.locator('//span[text()="Downloads"]').click();
  19 |     await page.pause()
> 20 |     await expect(page.locator('#result')).toContainText('Downloads');
     |                                           ^ Error: expect(locator).toContainText(expected) failed
  21 | });
```