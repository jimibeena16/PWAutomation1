# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: radio.spec.ts >> Verify Downloads checkbox is checked
- Location: tests\radio.spec.ts:10:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: locator.click: Test timeout of 3000ms exceeded.
Call log:
  - waiting for locator('.rc-tree-switcher_close')
    - locator resolved to <span class="rc-tree-switcher rc-tree-switcher_close"></span>

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link:
      - /url: https://demoqa.com
  - generic [ref=e6]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e11] [cursor=pointer]: Elements
        - list [ref=e23]:
          - listitem [ref=e24] [cursor=pointer]:
            - link "Text Box" [ref=e25]:
              - /url: /text-box
          - listitem [ref=e28] [cursor=pointer]:
            - link "Check Box" [ref=e29]:
              - /url: /checkbox
          - listitem [ref=e32] [cursor=pointer]:
            - link "Radio Button" [ref=e33]:
              - /url: /radio-button
          - listitem [ref=e36] [cursor=pointer]:
            - link "Web Tables" [ref=e37]:
              - /url: /webtables
          - listitem [ref=e40] [cursor=pointer]:
            - link "Buttons" [ref=e41]:
              - /url: /buttons
          - listitem [ref=e44] [cursor=pointer]:
            - link "Links" [ref=e45]:
              - /url: /links
          - listitem [ref=e48] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e49]:
              - /url: /broken
          - listitem [ref=e52] [cursor=pointer]:
            - link "Upload and Download" [ref=e53]:
              - /url: /upload-download
          - listitem [ref=e56] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e57]:
              - /url: /dynamic-properties
      - generic [ref=e60]: Forms
      - generic [ref=e73]: Alerts, Frame & Windows
      - generic [ref=e85]: Widgets
      - generic [ref=e98]: Interactions
      - generic [ref=e110]: Book Store Application
    - generic [ref=e122]:
      - heading "Check Box" [level=1] [ref=e123]
      - generic [ref=e125]:
        - generic:
          - textbox "for screen reader"
        - tree [ref=e126]:
          - treeitem "Select Home Home" [ref=e130]:
            - generic [ref=e131] [cursor=pointer]
            - checkbox "Select Home" [ref=e132] [cursor=pointer]
            - generic "Home" [ref=e133] [cursor=pointer]
  - contentinfo [ref=e142]:
    - generic [ref=e143]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | 
  4  | test('Radio Button Example', async ({ page }) => {
  5  |     await page.goto('https://demoqa.com/radio-button');
  6  |     await page.locator('label[for="yesRadio"]').click();
  7  |     await expect(page.locator('.text-success')).toHaveText('Yes');
  8  | });
  9  | 
  10 | test('Verify Downloads checkbox is checked', async ({ page }) => {
  11 | 
  12 |     await page.goto('https://demoqa.com/checkbox');
  13 | 
> 14 |     await page.locator('.rc-tree-switcher_close').click();
     |                                                   ^ Error: locator.click: Test timeout of 3000ms exceeded.
  15 |      // Locate Downloads checkbox using role 
  16 |     const downloadsCheckbox = page.getByRole('checkbox', {name: 'Select Downloads'});
  17 |     // Select Downloads
  18 |     await downloadsCheckbox.click();
  19 |     // Verify Downloads is checked
  20 |     await expect(downloadsCheckbox).toBeChecked();
  21 | });
  22 | 
  23 | test('Dropdown By Visible Text', async ({ page }) => {
  24 |     await page.goto('https://demoqa.com/select-menu');
  25 |     //await page.locator('#oldSelectMenu').selectOption({label: 'Purple'}); //using label
  26 |    // await page.locator('#oldSelectMenu').selectOption('5');
  27 |     await page.locator('#oldSelectMenu').selectOption({index:2}); 
  28 |     //  await expect(page.locator('#oldSelectMenu')).toHaveValue('4');
  29 | });
```