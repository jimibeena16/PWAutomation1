# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertions.spec.ts >> DemoQA Radio Button Selection Assertions
- Location: tests\assertions.spec.ts:52:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: locator.click: Test timeout of 3000ms exceeded.
Call log:
  - waiting for locator('label[for="yesRadio"]')

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
      - heading "Radio Button" [level=1] [ref=e123]
      - generic [ref=e124]:
        - generic [ref=e125]: Do you like the site?
        - generic [ref=e127]:
          - generic [ref=e128]:
            - radio "Yes" [ref=e129]
            - generic [ref=e130]: "Yes"
          - generic [ref=e131]:
            - radio "Impressive" [ref=e132]
            - generic [ref=e133]: Impressive
          - generic [ref=e134]:
            - radio "No" [disabled]
            - generic [ref=e135]: "No"
  - contentinfo [ref=e142]:
    - generic [ref=e143]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1   | import{test,expect} from '@playwright/test'
  2   | 
  3   | test('Page Assertions Example', async ({ page }) => {
  4   | 
  5   |     await page.goto('https://www.saucedemo.com/');
  6   |     await expect(page).toHaveURL('https://www.saucedemo.com/');
  7   |      await expect(page).toHaveTitle('Swag Labs');
  8   | 
  9   |   await page.locator('#user-name').fill('standard_user');
  10  |   await page.locator('#password').fill('secret_sauce');
  11  |   await page.locator('#login-button').click();
  12  | 
  13  |   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  14  | });
  15  | 
  16  | test('Locator State Assertions Example', async ({ page }) => {
  17  |   await page.goto('https://www.saucedemo.com/');
  18  | 
  19  |   const usernameInput = page.locator('#user-name');
  20  |   const loginButton = page.locator('#login-button');
  21  | 
  22  |   await expect(usernameInput).toBeVisible();
  23  |   await expect(usernameInput).toBeAttached();
  24  | 
  25  |   await expect(usernameInput).toBeEditable();
  26  | 
  27  |   await expect(usernameInput).toBeEmpty();
  28  | 
  29  |   await expect(loginButton).toBeEnabled();
  30  |   
  31  | });
  32  | 
  33  | test('Locator Content & Text Assertions Example', async ({ page }) => {
  34  | 
  35  |      await page.goto('https://www.saucedemo.com/');
  36  |    await page.locator('#user-name').fill('standard_user');
  37  |   await page.locator('#password').fill('secret_sauce');
  38  |   await page.locator('#login-button').click();
  39  | 
  40  |   const titleHeader = page.locator('.title');
  41  |   
  42  |   await expect(titleHeader).toHaveText('Products');
  43  | 
  44  |   await expect(titleHeader).toContainText('Prod');
  45  | 
  46  |   const searchOrFilter = page.locator('.product_sort_container');
  47  |   await searchOrFilter.selectOption('hilo'); // High to Low price
  48  |   await expect(searchOrFilter).toHaveValue('hilo');
  49  | });
  50  | 
  51  |  
  52  | test('DemoQA Radio Button Selection Assertions', async ({ page }) => {
  53  |   await page.goto('https://demoqa.com/radio-button');
  54  | 
  55  |   const yesRadioButton = page.locator('#yesRadio');
  56  |   const impressiveRadioButton = page.locator('#impressiveRadio');
  57  |   const outputResult = page.locator('.text-success');
  58  | 
  59  |   await expect(yesRadioButton).not.toBeChecked();
  60  |   await expect(impressiveRadioButton).not.toBeChecked();
  61  | 
> 62  |    await page.locator('label[for="yesRadio"]').click();
      |                                                ^ Error: locator.click: Test timeout of 3000ms exceeded.
  63  | 
  64  |    await expect(yesRadioButton).toBeChecked();
  65  |   
  66  |    await expect(outputResult).toHaveText('Yes');
  67  | 
  68  |    await page.locator('label[for="impressiveRadio"]').click();
  69  | 
  70  |    await expect(impressiveRadioButton).toBeChecked();
  71  |   await expect(yesRadioButton).not.toBeChecked(); 
  72  |   await expect(outputResult).toHaveText('Impressive');
  73  | });
  74  | 
  75  |  
  76  | test('DemoQA Practice Form Checkbox Assertions', async ({ page }) => {
  77  |   await page.goto('https://demoqa.com/automation-practice-form');
  78  | 
  79  |   const sportsCheckbox = page.locator('#hobbies-checkbox-1'); // Sports
  80  |   const readingCheckbox = page.locator('#hobbies-checkbox-2'); // Reading
  81  | 
  82  |    await expect(sportsCheckbox).not.toBeChecked();
  83  |   await expect(readingCheckbox).not.toBeChecked();
  84  | 
  85  |    await page.locator('label[for="hobbies-checkbox-1"]').click();
  86  | 
  87  |    await expect(sportsCheckbox).toBeChecked();
  88  |   await expect(readingCheckbox).not.toBeChecked();
  89  | 
  90  |    await page.locator('label[for="hobbies-checkbox-2"]').click();
  91  |   await expect(readingCheckbox).toBeChecked();
  92  | });
  93  | 
  94  | 
  95  | 
  96  | test('Generic Value Assertions Example', async ({ page }) => {
  97  |     await page.goto('https://www.saucedemo.com/');
  98  | 
  99  |   await page.locator('#user-name').fill('standard_user');
  100 |   await page.locator('#password').fill('secret_sauce');
  101 |   await page.locator('#login-button').click();
  102 | 
  103 |     const itemCount = await page.locator('.inventory_item').count();
  104 |   expect(itemCount).toBe(6);
  105 |   expect(itemCount).toBeGreaterThan(0);
  106 |   }); 
  107 | 
  108 | //soft assertions --
  109 | //const usernameInput = page.locator('#user-name');
  110 | //await expect.soft(usernameInput).toBeVisible();
  111 | //console.log('Soft Assertion executed');
  112 | 
  113 | 
```