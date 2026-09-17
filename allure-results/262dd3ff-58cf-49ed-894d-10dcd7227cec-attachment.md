# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dynamicelement.spec.ts >> title3
- Location: tests\dynamicelement.spec.ts:21:5

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
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

```yaml
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- navigation:
  - button
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
- list:
  - listitem:
    - link "Practice Form":
      - /url: /automation-practice-form
      - img
      - text: Practice Form
- img
- text: Alerts, Frame & Windows
- img
- list:
  - listitem:
    - link "Browser Windows":
      - /url: /browser-windows
      - img
      - text: Browser Windows
  - listitem:
    - link "Alerts":
      - /url: /alerts
      - img
      - text: Alerts
  - listitem:
    - link "Frames":
      - /url: /frames
      - img
      - text: Frames
  - listitem:
    - link "Nested Frames":
      - /url: /nestedframes
      - img
      - text: Nested Frames
  - listitem:
    - link "Modal Dialogs":
      - /url: /modal-dialogs
      - img
      - text: Modal Dialogs
- img
- text: Widgets
- img
- list:
  - listitem:
    - link "Accordian":
      - /url: /accordian
      - img
      - text: Accordian
  - listitem:
    - link "Auto Complete":
      - /url: /auto-complete
      - img
      - text: Auto Complete
  - listitem:
    - link "Date Picker":
      - /url: /date-picker
      - img
      - text: Date Picker
  - listitem:
    - link "Slider":
      - /url: /slider
      - img
      - text: Slider
  - listitem:
    - link "Progress Bar":
      - /url: /progress-bar
      - img
      - text: Progress Bar
  - listitem:
    - link "Tabs":
      - /url: /tabs
      - img
      - text: Tabs
  - listitem:
    - link "Tool Tips":
      - /url: /tool-tips
      - img
      - text: Tool Tips
  - listitem:
    - link "Menu":
      - /url: /menu
      - img
      - text: Menu
  - listitem:
    - link "Select Menu":
      - /url: /select-menu
      - img
      - text: Select Menu
- img
- text: Interactions
- img
- list:
  - listitem:
    - link "Sortable":
      - /url: /sortable
      - img
      - text: Sortable
  - listitem:
    - link "Selectable":
      - /url: /selectable
      - img
      - text: Selectable
  - listitem:
    - link "Resizable":
      - /url: /resizable
      - img
      - text: Resizable
  - listitem:
    - link "Droppable":
      - /url: /droppable
      - img
      - text: Droppable
  - listitem:
    - link "Dragabble":
      - /url: /dragabble
      - img
      - text: Dragabble
- img
- text: Book Store Application
- img
- list:
  - listitem:
    - link "Login":
      - /url: /login
      - img
      - text: Login
  - listitem:
    - link "Book Store":
      - /url: /books
      - img
      - text: Book Store
  - listitem:
    - link "Profile":
      - /url: /profile
      - img
      - text: Profile
  - listitem:
    - link "Book Store API":
      - /url: /swagger
      - img
      - text: Book Store API
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