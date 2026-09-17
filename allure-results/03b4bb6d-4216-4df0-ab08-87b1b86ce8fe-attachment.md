# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: userfacinglocators.spec.ts >> getByText
- Location: tests\userfacinglocators.spec.ts:36:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: locator.click: Test timeout of 3000ms exceeded.
Call log:
  - waiting for getByText('Text Box', { exact: true })
    - locator resolved to <span class="text">Text Box</span>
  - attempting click action
    - waiting for element to be visible, enabled and stable

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
    - generic [ref=e122]: Please select an item from left to start practice.
  - contentinfo [ref=e129]:
    - generic [ref=e130]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | //Built in locators
  4  | 
  5  | /*page.getByRole()
  6  | page.getByText()
  7  | page.getByLabel()
  8  | page.getByPlaceholder()
  9  | page.getByAltText()
  10 | page.getByTitle()
  11 | page.getByTestId() */
  12 | 
  13 | //page.getByRole()
  14 | test('Handling getByRole', async ({ page }) => {
  15 | await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
  16 |     await expect(page.getByRole("button",{name: "Get Sum"})).toBeVisible();
  17 |     await page.getByRole("button",{name:"Get Checked Value"}).click();
  18 |     
  19 | });
  20 | 
  21 | test('getByRole', async ({ page }) => {
  22 |     await page.goto('https://demoqa.com/text-box');
  23 |     await page.getByRole('button', { name: 'Submit' }).click();
  24 | });
  25 | 
  26 | //page.getByText()
  27 | test('Handling getByText', async ({ page }) => {
  28 |   await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
  29 |   await expect(page.getByText('Get Sum')).toBeVisible();
  30 |   await page.locator('#sum1').fill('4');
  31 |   await page.locator('#sum2').fill('5');
  32 |   await page.getByText('Get Sum').click();
  33 |   await expect(page.locator('#addmessage')).toHaveText('9');
  34 | });
  35 | 
  36 | test('getByText', async ({ page }) => {
  37 | 
  38 |     await page.goto('https://demoqa.com/elements');
> 39 |     await page.getByText('Text Box', { exact: true }).click();  //exact matching
     |                                                       ^ Error: locator.click: Test timeout of 3000ms exceeded.
  40 | });
  41 | 
  42 | //Locating Elements by Label
  43 | 
  44 | test('Locating Elements by Label', async ({ page }) => {
  45 |   await page.goto('https://www.testmuai.com/login/');
  46 |    await page.getByLabel('EMail Address').fill('testabc@gmail.com');
  47 |   });
  48 | 
  49 | test('getByLabel example', async ({ page }) => {
  50 |     await page.goto('https://demoqa.com/automation-practice-form');
  51 |     await page.getByLabel('Male', { exact: true }).check();
  52 | });
  53 | 
  54 | //Locating Elements By Placeholder
  55 | test('getByPlaceholder example', async ({ page }) => {
  56 |     await page.goto('https://demoqa.com/text-box');
  57 |     await page.getByPlaceholder('Full Name').fill('Jimi');
  58 |     await page.getByPlaceholder('name@example.com').fill('jimi@example.com');
  59 | });
  60 | 
  61 | //page.getByAltText()
  62 | 
  63 | test("Locating Elements By Alttext",async({page})=>{
  64 | await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
  65 | await page.getByAltText('TestMu AI Logo').first().click();    
  66 | });
  67 | 
  68 | //page.getByTitle()
  69 | test('Locating Elements By Title', async ({ page }) => {
  70 |    await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
  71 |    const logo = page.getByTitle('TestMu AI Logo');
  72 |    await expect(logo).toBeVisible();
  73 |    await logo.click();
  74 |    
  75 | });
  76 | 
  77 | //getBy AltText
  78 | 
  79 | test('Locating Elements By Alt Text', async ({ page }) => {
  80 |   await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
  81 |   const logo = page.getByAltText('TestMu AI Logo');
  82 |   await expect(logo).toBeVisible();
  83 |   await logo.click();
  84 | });
  85 | 
  86 | //get by test id --to locate an element based on its data-testid attribute.
  87 | 
  88 | //<button data-testid="directions">Itinéraire</button>
  89 | 
  90 | //await page.getByTestId('directions').click();
  91 | 
  92 | 
  93 | 
  94 | 
  95 | 
  96 | 
```