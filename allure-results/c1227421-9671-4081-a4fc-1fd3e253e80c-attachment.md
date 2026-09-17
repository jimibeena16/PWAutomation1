# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.ts >> has title7
- Location: tests\demo.spec.ts:60:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.rt-tbody .rt-tr-group').nth(1)
Expected substring: "Alden"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" locator('.rt-tbody .rt-tr-group').nth(1) with timeout 5000ms
  - waiting for locator('.rt-tbody .rt-tr-group').nth(1)

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
- heading "Web Tables" [level=1]
- button "Add"
- textbox "Type to search"
- button:
  - img
- table:
  - rowgroup:
    - row "First Name Last Name Age Email Salary Department Action":
      - columnheader "First Name"
      - columnheader "Last Name"
      - columnheader "Age"
      - columnheader "Email"
      - columnheader "Salary"
      - columnheader "Department"
      - columnheader "Action"
  - rowgroup:
    - row "Cierra Vega 39 cierra@example.com 10000 Insurance EditDelete":
      - cell "Cierra"
      - cell "Vega"
      - cell "39"
      - cell "cierra@example.com"
      - cell "10000"
      - cell "Insurance"
      - cell "EditDelete":
        - img
        - img
    - row "Alden Cantrell 45 alden@example.com 12000 Compliance EditDelete":
      - cell "Alden"
      - cell "Cantrell"
      - cell "45"
      - cell "alden@example.com"
      - cell "12000"
      - cell "Compliance"
      - cell "EditDelete":
        - img
        - img
    - row "Kierra Gentry 29 kierra@example.com 2000 Legal EditDelete":
      - cell "Kierra"
      - cell "Gentry"
      - cell "29"
      - cell "kierra@example.com"
      - cell "2000"
      - cell "Legal"
      - cell "EditDelete":
        - img
        - img
- group:
  - button "First" [disabled]
  - button "Previous" [disabled]
  - button "Next" [disabled]
  - button "Last" [disabled]
- text: Page
- strong: 1 of 1
- combobox:
  - option "Show 10" [selected]
  - option "Show 20"
  - option "Show 30"
  - option "Show 40"
  - option "Show 50"
- iframe
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('has title', async ({ page }) => {
  4  | //Chaining using getByPlaceholder
  5  | await page.goto("https://demoqa.com/text-box")
  6  | const form = page.locator('#userForm');
  7  | await form.getByPlaceholder('Full Name').fill('Jimi');
  8  | await form.getByPlaceholder('name@example.com').fill('jimi@test.com');
  9  | });
  10 | 
  11 | test('has title1', async ({ page }) => {
  12 | //Chaining using filter
  13 | await page.goto("https://demoqa.com/automation-practice-form")
  14 | // forms page
  15 | const genderSection = page.locator('#genterWrapper');
  16 | 
  17 | await genderSection
  18 |     .locator('label')
  19 |     .filter({ hasText: 'Male' })
  20 |     .click();
  21 | 
  22 |     });
  23 | 
  24 | //using first()--when multiple elements match and want the first one
  25 | test('has title2', async ({ page }) => {
  26 | await page.goto("https://demoqa.com/elements")
  27 | const menuItems = page.locator('.menu-list li');
  28 | await menuItems.first().click();
  29 | //same as
  30 | await page.locator('.menu-list li').nth(0).click();
  31 |  });
  32 | 
  33 | test('has title3', async ({ page }) => {
  34 | //webtables
  35 | await page.goto("https://demoqa.com/webtables")
  36 | const rows = page.locator('tbody tr');
  37 | console.log(await rows.first().textContent());
  38 |  });
  39 | 
  40 | test('has title4', async ({ page }) => {
  41 | //using last()--when we need last matching element
  42 | await page.goto("https://demoqa.com/elements")
  43 | const menuItems = page.locator('.menu-list li');
  44 | await menuItems.last().click();
  45 |  });
  46 | 
  47 |  test('has title5', async ({ page }) => {
  48 | //webtables
  49 | await page.goto("https://demoqa.com/webtables")
  50 | const rows = page.locator('tbody tr');
  51 | await expect(rows.last()).toContainText('Alden');
  52 | });
  53 | ``
  54 | test('has title6', async ({ page }) => {
  55 | //Using nth -- Used to select an element by index, starts from 0
  56 | await page.goto("https://demoqa.com/elements")
  57 | await page.locator('.menu-list li').nth(2).click();
  58 | });
  59 | 
  60 | test('has title7', async ({ page }) => {
  61 | //webtables
  62 | await page.goto("https://demoqa.com/webtables")
  63 | const rows = page.locator('.rt-tbody .rt-tr-group');
> 64 | await expect(rows.nth(1)).toContainText('Alden');
     |                           ^ Error: expect(locator).toContainText(expected) failed
  65 | });
  66 | 
  67 | test('has title8', async ({ page }) => {
  68 | //Using and() -- combines 2 locators,Element must satisfy both conditions
  69 | await page.goto('https://demoqa.com/text-box');
  70 | const fullName = page.getByPlaceholder('Full Name').and(page.locator('#userName'));
  71 | await fullName.fill('Jimi');
  72 | 
  73 | const emailTextbox = page.getByPlaceholder('name@example.com').and(page.locator('#userEmail'));
  74 | await emailTextbox.fill('jimi@test.com');
  75 | });
  76 | 
  77 | test('has title9', async ({ page }) => {
  78 | //Using or() -- Matches either locator, when UI can display one of multiple elements
  79 | await page.goto('https://demoqa.com/text-box');
  80 | const fullName = page.locator('#userName');
  81 | const email = page.locator('#userEmail');
  82 | await expect(fullName.or (email).first() ).toBeVisible();
  83 | });
  84 | 
```