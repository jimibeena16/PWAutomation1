# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: special_locators.spec.ts >> last locator
- Location: tests\special_locators.spec.ts:25:6

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
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test, expect} from "@playwright/test"
  2  | 
  3  | test('chaining using placeholder', async({page}) => 
  4  |     {
  5  | await page.goto("https://demoqa.com/text-box")
  6  | const form = page.locator('#userForm');
  7  | await form.getByPlaceholder('Full Name').fill('Jimi');
  8  | await page.pause()
  9  | await form.getByPlaceholder('name@example.com').fill('jimi@test.com');
  10 | 
  11 | }
  12 | )
  13 | 
  14 | test('chaining using filter', async({page}) => {
  15 |     await page.goto("https://demoqa.com/automation-practice-form")
  16 | // forms page
  17 | const genderSection = page.locator('#genterWrapper');
  18 |  await page.pause()
  19 | await genderSection.getByText('Male', {exact: true}).click();
  20 | await page.pause()
  21 |    
  22 | }
  23 | )
  24 | 
  25 | test.only('last locator', async({page}) => {
  26 |    
  27 | await page.goto("https://demoqa.com/webtables")
  28 | const rows = page.locator('.rt-tbody .rt-tr-group');
> 29 | await expect(rows.nth(1)).toContainText('Alden');
     |                           ^ Error: expect(locator).toContainText(expected) failed
  30 | })
  31 | 
  32 | 
  33 | 
```