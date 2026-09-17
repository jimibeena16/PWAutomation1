# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: radio.spec.ts >> Verify Downloads checkbox is checked
- Location: tests\radio.spec.ts:25:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#tree-node-downloads')

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
    - generic [ref=e124]:
      - heading "Check Box" [level=1] [ref=e125]
      - generic [ref=e127]:
        - generic:
          - textbox "for screen reader"
        - tree [ref=e128]:
          - generic [ref=e131]:
            - treeitem "Select Home Home" [expanded] [ref=e132]:
              - generic [ref=e133] [cursor=pointer]
              - checkbox "Select Home" [ref=e134] [cursor=pointer]
              - generic "Home" [ref=e135] [cursor=pointer]
            - treeitem "Select Desktop Desktop" [ref=e138]:
              - generic [ref=e139] [cursor=pointer]
              - checkbox "Select Desktop" [ref=e140] [cursor=pointer]
              - generic "Desktop" [ref=e141] [cursor=pointer]
            - treeitem "Select Documents Documents" [ref=e144]:
              - generic [ref=e145] [cursor=pointer]
              - checkbox "Select Documents" [ref=e146] [cursor=pointer]
              - generic "Documents" [ref=e147] [cursor=pointer]
            - treeitem "Select Downloads Downloads" [ref=e150]:
              - generic [ref=e151] [cursor=pointer]
              - checkbox "Select Downloads" [ref=e152] [cursor=pointer]
              - generic "Downloads" [ref=e153] [cursor=pointer]
  - contentinfo [ref=e162]:
    - generic [ref=e163]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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
  11 | test('Checkbox Example', async ({ page }) => {
  12 |     test.setTimeout(5000)
  13 |     await page.goto('https://demoqa.com/checkbox');
  14 |     // Expand all
  15 |     await page.locator('.rc-tree-switcher').first().click();
  16 |     await page.pause()
  17 |     // Select Downloads checkbox
  18 |     //await page.locator('//span[@class="rc-tree-title"]');
  19 |    // await page.pause()
  20 |    await page.getByText('Downloads', {exact:true}).click();
  21 |   // await expect(page.locator('//span[@class="rc-tree-title"]')).toContainText('Downloads');
  22 | });
  23 | 
  24 | 
  25 | test.only('Verify Downloads checkbox is checked', async ({ page }) => {
  26 | 
  27 |     await page.goto('https://demoqa.com/checkbox');
  28 |   //  await page.getByTitle('Expand all').click();
  29 |   await page.locator('.rc-tree-switcher').click();
  30 |    // await page.locator('.rct-collapse-btn').click();
  31 |     const downloadsCheckbox = page.locator('#tree-node-downloads');
> 32 |     await downloadsCheckbox.check();
     |                             ^ Error: locator.check: Test timeout of 30000ms exceeded.
  33 |     //await page.getByText('Downloads', {exact:true}).click();
  34 |     await expect(downloadsCheckbox).toBeChecked();
  35 | });
  36 | 
  37 | test('Dropdown By Visible Text', async ({ page }) => {
  38 |     await page.goto('https://demoqa.com/select-menu');
  39 |     //await page.locator('#oldSelectMenu').selectOption({label: 'Purple'}); //using label
  40 |    // await page.locator('#oldSelectMenu').selectOption('5');
  41 |     await page.locator('#oldSelectMenu').selectOption({index:2}); 
  42 |     await page.pause()
  43 |   //  await expect(page.locator('#oldSelectMenu')).toHaveValue('4');
  44 | });
```